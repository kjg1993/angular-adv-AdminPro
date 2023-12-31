import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ 
    RegisterComponent,
    LoginComponent,
   ],
   exports:[ 
    RegisterComponent,
    LoginComponent,
   ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
