import { useCallback, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import {
  getGenreById,
  getMoviesByGenreId,
} from './services/genresMovies';

import {
  GenreResponseProps,
  MovieProps,
} from './interfaces/globalInterfaces';

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps,
  );

  const handleChangeGenre = useCallback(async (genreId: number) => {
    const [genreById, moviesByGenreId] = await Promise.all([
      await getGenreById(genreId),
      await getMoviesByGenreId(genreId),
    ]);

    if (!moviesByGenreId || !genreById) return;

    setSelectedGenre(genreById);
    setMovies(moviesByGenreId);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleChangeGenre={handleChangeGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}
