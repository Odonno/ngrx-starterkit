import { createAction, props, union } from '@ngrx/store';

export const toggleOnline = createAction('TOGGLE_ONLINE', props<{ online: boolean }>());

export const loadApp = createAction('LOAD_APP');
export const loadAppFulfilled = createAction('LOAD_APP_FULFILLED', props<{}>());
export const loadAppFailed = createAction('LOAD_APP_FAILED', props<{ error: any }>());

export const loadingActions = union({
    toggleOnline,
    loadApp, loadAppFulfilled, loadAppFailed
});
