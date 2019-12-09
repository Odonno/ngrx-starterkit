import { Injectable } from '@angular/core';
import { merge, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class NetworkService {
    public offline$ = fromEvent(window, 'offline').pipe(
        map(() => false)
    );

    public online$ = fromEvent(window, 'online').pipe(
        map(() => true)
    );

    isOnline = () => merge(this.offline$, this.online$).pipe(
        startWith(navigator.onLine)
    );
}
