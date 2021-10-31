import {
  createContext, useReducer, FC,
} from 'react';
import reducer from 'context/reducer';
import actions from 'context/actions';
import * as models from 'models';

const initialMovieList = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0,
};

const initialState = {
  loading: true,
  error: false,
  errorMessage: '',
  movie: {} as models.MovieDetail,
  similarMovies: initialMovieList,
  movies: initialMovieList,
  trendingMovies: initialMovieList,
  searchedMovies: initialMovieList,
};

export const GlobalContext = createContext<models.createContextType>(
  { state: initialState, dispatch: () => null, actions: {} },
);

export const GlobalProvider:FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};
