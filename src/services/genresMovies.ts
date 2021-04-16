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