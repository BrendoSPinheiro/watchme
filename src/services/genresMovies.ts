import { api } from './api';

import {
  GenreResponseProps,
  MovieProps,
} from '../interfaces/globalInterfaces';

export const getGenres = async (): Promise<GenreResponseProps[] | undefined> => {
  const { data } = await api.get('/genres');

  if (!data) return;

  const genres = data as GenreResponseProps[]

  return genres;
}

export const getGenreById = async (
  genreId: number
): Promise<GenreResponseProps | undefined> => {
  const { data } = await api.get(`/genres/${genreId}`);

  if (!data) return;

  const genre = data as GenreResponseProps;

  return genre;
}

export const getMoviesByGenreId = async (
  genreId: number
): Promise<MovieProps[] | undefined> => {
  const { data } = await api.get(`movies/?Genre_id=${genreId}`);

  if (!data) return;

  const movies = data as MovieProps[];

  return movies;
}