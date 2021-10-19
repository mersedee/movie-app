import {
  createContext, useReducer, useEffect, FC,
} from 'react';
import reducer from 'context/reducer';
import actions from 'context/actions';
import * as models from 'models';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  movies: [],
};

export const GlobalContext = createContext<models.createContextType>(
  { state: initialState, dispatch: () => null, actions: {} },
);

export const GlobalProvider:FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    actions.getMovies()(dispatch);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </GlobalContext.Provider>
  );
};
