import { isUndefined } from "lodash";
import IAnimal from "../Interfaces/IAnimal";
import { supabase } from "../lib/supabase";

const setSolicitudByLoggedUserId = async (animal: IAnimal, userId: string) => {
  let { data, error } = await supabase
    .from("solicitudes")
    .select("*")
    .eq("animal_id", animal.id)
    .eq("usuario_id", userId);

  // console.log(data, animal.nombre);
  // try {
  if (data?.length === 0) {
    ({ error } = await supabase.from("solicitudes").insert({
      usuario_id: userId,
      animal_id: animal.id,
      estado_solicitud: "pendiente",
      comentarios: "Perro agregado desde Adogtame",
    }));
    if (error) {
      console.log(error.message);
      console.log(userId, " yyyyy ", animal.id);
      return error;
    }
  } else {
    console.log("no entro al if");
  }
  // } catch (error) {
  //   console.log(error);
  // }
};

export { setSolicitudByLoggedUserId };
