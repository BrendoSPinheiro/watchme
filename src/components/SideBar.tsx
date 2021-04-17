import { useEffect, useState } from 'react';
import { getGenres } from '../services/genresMovies';

import { Button } from './Button';

import '../styles/sidebar.scss';

import { GenreResponseProps } from '../interfaces/globalInterfaces';

type SideBarProps = {
  handleChangeGenre: (genreId: number) => Promise<void>;
}

export function SideBar({ handleChangeGenre }: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getGenres();

      if (!response) return;

      setGenres(response);
    })();
  }, []);

  useEffect(() => {
    handleChangeGenre(selectedGenreId);
  }, [selectedGenreId, handleChangeGenre]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch
        <p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}
