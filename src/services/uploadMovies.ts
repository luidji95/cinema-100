import { supabase } from "../supabase";
import { singleMovie } from "../types/movie";

let isSeeded = false;

export const uploadMovies = async () => {
  if (isSeeded) return; // Ako su filmovi već uneti, prekini izvršavanje

  const { data: existingMovies, error: fetchError } = await supabase
    .from("movies")
    .select("*");

  if (fetchError) {
    console.error("Error fetching existing movies:", fetchError);
    return;
  }

  if (!existingMovies || existingMovies.length === 0) {
    const { data: insertedMovies, error: insertError } = await supabase
      .from("movies")
      .insert(data);

    if (insertError) {
      console.error("Error inserting movies:", insertError);
    } else {
      console.log("Movies successfully inserted:", insertedMovies);
      isSeeded = true; // Postavi flag na true nakon uspešnog unosa
    }
  } else {
    console.log("Movies already exist in the database.");
    isSeeded = true; // Postavi flag na true ako filmovi već postoje
  }
};
