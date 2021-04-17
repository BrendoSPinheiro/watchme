import { useState } from 'react';

import { MovieCard } from './components/MovieCard';

import './styles/global.scss';

import './styles/content.scss';

import {
  GenreResponseProps,
  MovieProps,
} from './interfaces/globalInterfaces';
import { SideBar } from './components/SideBar';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  // useEffect(() => {
  //   api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
  //     setMovies(response.data);
  //   });

  //   api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
  //     setSelectedGenre(response.data);
  //   })
  // }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar />
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}