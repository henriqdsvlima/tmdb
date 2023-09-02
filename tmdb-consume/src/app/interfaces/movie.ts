import { Genre } from "./genre";
import { SpokenLanguage } from "./language";

export interface Movie {
  adult: boolean;
  genres: Genre[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
}

export type MoviePreview = Partial<Movie>
