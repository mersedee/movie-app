import { Movie } from 'models';
import { Genre, GENRERS } from 'api/types';

const findGenres = (movie: Movie) => {
  const formatted:Genre[] = [];
  GENRERS.forEach((genre: Genre) => {
    movie.genre_ids.forEach((id) => {
      if (parseInt(id, 10) === genre.id) {
        formatted.push(genre);
      }
    });
  });
  return formatted;
};

export default findGenres;
