import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './mixins/first/first.component';
import { SecondComponent } from './mixins/second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path:'first',
        component:FirstComponent
      },
      {
        path:'second',
        component:SecondComponent
      },
    ]
  },
  
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
