import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * Ng-store State Management
 */

 import { StoreModule } from '@ngrx/store';


/* Component Imports */
import { HeaderComponent } from './components/header/header.component';
import { DashboardHomeComponent } from './Pages/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    StoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}