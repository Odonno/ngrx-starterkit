import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { NetworkService } from 'src/app/services/network.service';
import { toggleOnline, loadApp, loadAppFulfilled, loadingActions } from './loading.actions';

@Injectable()
export class LoadingEffects {
    constructor(
        private readonly actions$: Actions<typeof loadingActions>,
        private readonly networkService: NetworkService
    ) { }

    online$ = createEffect(() =>
        this.networkService.isOnline().pipe(
            map(online => toggleOnline({ online }))
        )
    );

    loadApp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadApp),
            map(_ => loadAppFulfilled({}))
        )
    );
}
