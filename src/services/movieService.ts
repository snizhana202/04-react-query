import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<{ results: Movie[] }>(
    `${BASE_URL}/search/movie`,
    {
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.results;
};
