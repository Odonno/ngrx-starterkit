import { AppState, initialState } from 'src/app/state';
import { toggleOnline } from './loading.actions';
import { applyActions } from 'src/app/functions/testing.functions.spec';

describe('features/loading/reducers', () => {
    describe('toggleOnline', () => {
        it('should set online property to true on the state', () => {
            // arrange
            const appState = {
                ...initialState
            } as AppState;

            // act
            const action = toggleOnline({ online: true });
            const result = applyActions(appState, [action]);

            // assert
            expect(result.online).toBeTruthy();
        });

        it('should set online property to false on the state', () => {
            // arrange
            const appState = {
                ...initialState
            } as AppState;

            // act
            const action = toggleOnline({ online: false });
            const result = applyActions(appState, [action]);

            // assert
            expect(result.online).toBeFalsy();
        });
    });
});
