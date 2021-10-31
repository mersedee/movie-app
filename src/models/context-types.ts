import { Dispatch } from 'react';
import { MovieList } from './movie-types';

export type initialStateType = {
    loading: boolean
    error: boolean
    errorMessage: string
    movies: MovieList
    trendingMovies: MovieList
};

export type createContextType = {
    state: initialStateType
    dispatch: Dispatch<any>
    actions: object
}
