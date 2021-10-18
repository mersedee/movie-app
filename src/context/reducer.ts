import types from './types';

export function reducer(state: any, action: any) {
    switch(action.type) {
        case types.API_GET_PENDING:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: ''
            }
        case types.API_GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.data.data.results
            };
        case types.API_GET_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}