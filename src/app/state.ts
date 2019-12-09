import { RouterReducerState } from '@ngrx/router-store';
import { createReducer, Action } from '@ngrx/store';
import { reducers } from './features/index.reducers';

export interface RootState {
    readonly app: AppState;
    readonly router: RouterReducerState;
}

export interface AppState {
    readonly online: boolean | undefined;
    readonly loading: LoadingState;
}

export type LoadingState =
    | boolean
    | 'INIT_REALTIME_FAILED'
    | undefined;

export const initialState: AppState = {
    online: undefined,
    loading: undefined
};

const appReducer = createReducer(
    initialState,
    ...reducers
);

export function reducer(state: AppState | undefined, action: Action) {
    return appReducer(state, action);
}
