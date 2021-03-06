import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.router';

import { AppComponent } from './app.component';

import { CoreModule } from './components/core/core.module';
import { ViewsModule } from './components/views/views.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthModule } from './components/auth/auth.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    ViewsModule,
    DashboardModule,
    AuthModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
