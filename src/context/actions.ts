import axios from 'axios';
import { Dispatch } from 'react';
import {
  getMovieListUrl, getMovieUrl, getMovieVideos, getSearchKeywordUrl,
  getSimilarMoviesUrl, getTrendingMoviesUrl,
} from 'api';
import types from 'context/types';
import { Sort } from 'models';

const actions = {
  getMovies: (page: number = 1, sort: Sort) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_MOVIES_PENDING });
    try {
      const data = await axios.get(getMovieListUrl(page, sort));
      dispatch({ type: types.API_GET_MOVIES_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_MOVIES_FAILURE, payload: error.toString() });
    }
  },
  getTrendingMovies: () => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_TRENDING_MOVIES_PENDING });
    try {
      const data = await axios.get(getTrendingMoviesUrl());
      dispatch({ type: types.API_GET_TRENDING_MOVIES_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_TRENDING_MOVIES_FAILURE, payload: error.toString() });
    }
  },
  getMovie: (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_MOVIE_PENDING });
    try {
      const data = await axios.get(getMovieUrl(id));
      dispatch({ type: types.API_GET_MOVIE_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_MOVIE_FAILURE, payload: error.toString() });
    }
  },
  getSimilarMovies: (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_SIMILAR_MOVIES_PENDING });
    try {
      const data = await axios.get(getSimilarMoviesUrl(id));
      dispatch({ type: types.API_GET_SIMILAR_MOVIES_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_SIMILAR_MOVIES_FAILURE, payload: error.toString() });
    }
  },
  getSearchedMovies: (keyword: string) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_SEARCH_KEYWORD_PENDING });
    try {
      const data = await axios.get(getSearchKeywordUrl(keyword));
      dispatch({ type: types.API_GET_SEARCH_KEYWORD_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_SIMILAR_MOVIES_FAILURE, payload: error.toString() });
    }
  },
  getMovieVideos: (id: number) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: types.API_GET_MOVIE_VIDEOS_PENDING });
    try {
      const data = await axios.get(getMovieVideos(id));
      dispatch({ type: types.API_GET_MOVIE_VIDEOS_SUCCESS, payload: { data } });
    } catch (error: any) {
      if (error.cancelled) return;
      dispatch({ type: types.API_GET_MOVIE_VIDEOS_FAILURE, payload: error.toString() });
    }
  },
};

export default actions;
