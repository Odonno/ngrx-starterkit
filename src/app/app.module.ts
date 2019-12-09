import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer, RootState } from './state';

import { environment } from 'src/environments/environment';
import { featuresComponents } from './features';
import { bootstrapComponent, layoutComponents } from './layout';
import { appEffects } from './features/index.effects';

@NgModule({
  declarations: [
    ...layoutComponents,
    ...featuresComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      app: reducer,
      router: routerReducer,
    } as ActionReducerMap<RootState>),
    EffectsModule.forRoot([
      ...appEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: `Starter kit - @ngrx DevTools`,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [bootstrapComponent]
})
export class AppModule { }
