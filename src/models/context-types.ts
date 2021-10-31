import { Dispatch } from 'react';
import { Movie, MovieList } from './movie-types';

export type initialStateType = {
    loading: boolean
    error: boolean
    errorMessage: string
    movie: Movie
    movies: MovieList
    trendingMovies: MovieList
};

export type createContextType = {
    state: initialStateType
    dispatch: Dispatch<any>
    actions: object
}
