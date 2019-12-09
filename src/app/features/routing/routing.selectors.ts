import { getSelectors } from '@ngrx/router-store';
import { RootState } from 'src/app/state';

export const selectRouter = (state: RootState) => state.router;

export const {
    selectQueryParams,
    selectRouteParams,
    selectRouteData,
    selectUrl,
    selectCurrentRoute,
    selectQueryParam,
    selectRouteParam
} = getSelectors(selectRouter);