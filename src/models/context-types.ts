import { Dispatch } from 'react';
import { MovieDetail, MovieList } from './movie-types';
import { VideoList } from './video-types';

export type initialStateType = {
    loading: boolean
    error: boolean
    errorMessage: string
    movie: MovieDetail
    similarMovies: MovieList
    movies: MovieList
    trendingMovies: MovieList
    searchedMovies: MovieList
    videos: VideoList
};

export type createContextType = {
    state: initialStateType
    dispatch: Dispatch<any>
    actions: object
}
