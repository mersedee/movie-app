import { Dispatch } from "react";
import {Movie} from "./movie";

export type initialStateType = {
    loading: boolean;
    error: boolean;
    errorMessage: string;
    movies: Movie[];
};

export type createContextType = {
    state: initialStateType;
    dispatch: Dispatch<any>;
    actions: object;
}