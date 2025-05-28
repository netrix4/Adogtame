import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import IAnimal from "../Interfaces/IAnimal";

export const useFiltroAnimales = (filtros: {
  tipo?: string;
  raza?: string;
  tamaño?: string;
  color?: string;
  centro_id?: string;
  descripcion?: string;
  edad?: string;
}) => {
  const [animales, setAnimales] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimales = async () => {
      setLoading(true);

      // let dara = await supabase
      //   .from("solicitudes")
      //   .delete()
      //   .eq("usuario_id", "a5e2b971-c86e-416e-b542-dad6be8da962");

      let query = supabase.from("animales").select("*");

      if (filtros.tipo) query = query.eq("tipo", filtros.tipo);
      if (filtros.descripcion)
        query = query.ilike("descripcion", `%${filtros.descripcion}%`);
      if (filtros.raza) query = query.eq("raza", filtros.raza);
      if (filtros.tamaño) query = query.eq("tamaño", filtros.tamaño);
      if (filtros.color) query = query.eq("color", filtros.color);
      if (filtros.centro_id) query = query.eq("centro_id", filtros.centro_id);

      if (filtros.edad) {
        switch (filtros.edad) {
          case "1-2":
            query = query.gte("edad", 1).lte("edad", 2);
            break;
          case "2-4":
            query = query.gte("edad", 2).lte("edad", 4);
            break;
          case "5+":
            query = query.gte("edad", 5);
            break;
        }
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error al obtener animales:", error.message);
        setAnimales([]);
      } else {
        setAnimales(data || []);
      }

      setLoading(false);
    };

    fetchAnimales();
  }, [filtros]);

  return { animales, loading };
};
