import types from 'context/types';
import * as models from 'models';

function reducer(state: models.initialStateType, action: any) {
  switch (action.type) {
    case types.API_GET_MOVIES_PENDING:
    case types.API_GET_TRENDING_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    case types.API_GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.data.data,
      };
    case types.API_GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        trendingMovies: action.payload.data.data,
      };
    case types.API_GET_MOVIES_FAILURE:
    case types.API_GET_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
