import { api } from './api';

import {
  GenreResponseProps,
  MovieProps,
} from '../interfaces/globalInterfaces';

export const getGenres = async (): Promise<GenreResponseProps[] | undefined> => {
  const { data } = await api.get('/genres');

  if (!data) return;

  const genres = data as GenreResponseProps[]

  console.log(genres);

  return genres;
}

export const getMovies = async (): Promise<MovieProps[] | undefined> => {
  const { data } = await api.get('/movies');

  if (!data) return;

  const movies = data as MovieProps[];

  return movies;
}