import { RootState } from 'src/app/state';

export const selectLoading = (state: RootState) => state.app.loading;
export const selectOnline = (state: RootState) => state.app.online;
