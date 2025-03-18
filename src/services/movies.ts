import { supabase } from "../supabase";

export async function fetchMovies() {
  const { data, error } = await supabase.from("movies").select("*");

  if (error) {
    console.error("Error fetching movies:", error);
  } else {
    console.log("Fetched movies:", data);
  }

  return data || [];
}
