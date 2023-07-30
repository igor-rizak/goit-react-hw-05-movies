import { useState, useEffect } from 'react';
import getTrending from 'API/get-trending';
import Container from 'components/Container/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import { Trending } from './HomePage.styled';
function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(({ results }) => {
      const moviesArr = [];

      results.map(
        ({ id, original_title, poster_path, vote_average, vote_count }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };

          return moviesArr.push(movie);
        }
      );

      setMovies(moviesArr);
    });
  }, []);

  return (
    movies && (
      <Container>
        <Trending>Trending today</Trending>
        <MoviesList movies={movies} />
      </Container>
    )
  );
}

export default HomePage;
