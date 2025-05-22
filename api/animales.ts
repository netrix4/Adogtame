import { supabase } from "../lib/supabase";

const fetchAnimalById = async (id: string) => {
  let query = supabase.from("animales").select("*");

  query = query.eq("id", id);

  const { data, error } = await query;

  return (data || [])[0];
};

export { fetchAnimalById };
