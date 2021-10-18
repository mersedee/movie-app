import React, { createContext, useReducer, useEffect, FC, Dispatch } from 'react';
import { reducer } from './reducer';
import { actions } from './actions';

const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    movies: []
}

export const GlobalContext = createContext({state: {}, dispatch: () => null, actions: {}});

export const GlobalProvider:FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        actions.getPinnedDocuments()(dispatch);
    }, []);

    const dispatchStore = state.dispatch as typeof state.dispatch | Dispatch<any>

    return <GlobalContext.Provider value={{
        state, dispatch: dispatchStore, actions: actions,
    }}>
        {children}
    </GlobalContext.Provider>;
}
