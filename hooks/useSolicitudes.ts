import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useProfileData } from "./useProfileData";
import { toNumber } from "lodash";
import { fetchAnimalById } from "../api/animales";

export const useSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState<any[]>();
  const [errores, setErrores] = useState<Error>();
  const { userMetaData } = useProfileData();

  const getSolicitudesByLoggedUserId = async (userId: string) => {
    const { data, error } = await supabase
      .from("solicitudes")
      .select("*")
      .eq("usuario_id", userId);
    if (error) {
      setSolicitudes([]);
      setErrores(error);
    } else {
      // Esto deberia de venir de back
      const animalesBySolicitudes = await Promise.all(
        data.map((solicitud) => fetchAnimalById(solicitud.animal_id))
      );
      const verdaderasSolicitudes = data.map((solicitud, index) => ({
        ...solicitud,
        animal: animalesBySolicitudes[index],
      }));
      setSolicitudes(verdaderasSolicitudes);
    }
  };

  useEffect((): any => {
    if (userMetaData?.sub) {
      getSolicitudesByLoggedUserId(userMetaData.sub);
    }
  }, [userMetaData]);

  return {
    solicitudes,
    getSolicitudesByLoggedUserId,
    userId: userMetaData?.sub,
  };
};
