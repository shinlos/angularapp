import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRouter } from './auth-router';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRouter
  ],
  declarations: [
    LoginComponent
  ],
  exports: [],
  providers: [
  ]
})

export class AuthModule { }