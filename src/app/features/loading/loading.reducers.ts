import { on } from '@ngrx/store';
import { loadApp, toggleOnline, loadAppFulfilled } from './loading.actions';
import { AppState, LoadingState } from 'src/app/state';

export const loadingReducers = [
    on(toggleOnline, (state: AppState, { online }) => ({
        ...state,
        online
    })),
    on(loadApp, (state: AppState) => ({
        ...state,
        loading: true as LoadingState
    })),
    on(loadAppFulfilled, (state: AppState) => ({
        ...state,
        loading: false as LoadingState
    }))
];
