import axios from 'axios';
import {getMovieListUrl} from '../api';
import types from './types';

export const actions = {
    getPinnedDocuments: () => async (dispatch:any) => {
        dispatch({ type: types.API_GET_PENDING });
        try {
            const data = await axios.get(getMovieListUrl());
            dispatch({ type: types.API_GET_MOVIES_SUCCESS, payload: { data } });
        } catch (error:any) {
            if (error.cancelled) return;
            dispatch({ type: types.API_GET_MOVIES_FAILURE, payload: error.toString() });
            console.error(error);
        }
    },
};

