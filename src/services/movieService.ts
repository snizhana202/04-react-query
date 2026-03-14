import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const MY_API_KEY = import.meta.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<MoviesResponse> => {
  const { data } = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      api_key: MY_API_KEY,
      query,
      page,
    },
  });
  return data;
};
