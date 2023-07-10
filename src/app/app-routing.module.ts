import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  
    path: 'home',
    component: HomeComponent
  },
  {
  component:SignupComponent,
  path: 'signup'
  },
  {
    component:TableDataComponent,
    path:'table' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
