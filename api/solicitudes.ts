import IAnimal from "../Interfaces/IAnimal";
import { supabase } from "../lib/supabase";

const setSolicitudByLoggedUserId = async (animal: IAnimal, userId: string) => {
  const { error } = await supabase.from("solicitudes").insert({
    usuario_id: userId,
    animal_id: animal.id,
    estado_solicitud: "pendiente",
    comentarios: "No se como llegara este registro a bd",
  });
  if (error) {
    console.log(error.message);
    console.log(userId, " yyyyy ", animal.id);
    return error;
  }
};

export { setSolicitudByLoggedUserId };
