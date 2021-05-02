import { reducers, metaReducers } from '././app-state/index';
import { environment } from './../environments/environment';
import { UserService } from './serives/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Ng-store State Management
 */

import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './app-state';
import { UserEffects } from './app-state/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/* Component Imports */
import { HeaderComponent } from './components/header/header.component';
import { DashboardHomeComponent } from './Pages/dashboard-home/dashboard-home.component';
import { EffectsModule } from '@ngrx/effects';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
