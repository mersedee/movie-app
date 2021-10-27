import axios from 'axios';
import { Dispatch } from 'react';
import { getMovieListUrl, getTrendingMoviesUrl } from 'api';
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
};

export default actions;
