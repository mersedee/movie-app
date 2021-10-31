import { Dispatch } from 'react';
import { MovieDetail, MovieList } from './movie-types';

export type initialStateType = {
    loading: boolean
    error: boolean
    errorMessage: string
    movie: MovieDetail
    similarMovies: MovieList,
    movies: MovieList
    trendingMovies: MovieList
};

export type createContextType = {
    state: initialStateType
    dispatch: Dispatch<any>
    actions: object
}
