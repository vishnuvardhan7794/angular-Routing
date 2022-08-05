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
    path: 'routing',
    loadChildren: () => import('./routing-example/routing-example.module').then((r) => r.RoutingExampleModule),
  }
  // {
  //   path: '',
  //   component: WelcomeComponent,
  //   children: [
  //     {
  //       path:'first',
  //       component:FirstComponent
  //     },
  //     {
  //       path:'second',
  //       component:SecondComponent
  //     },
  //     {
  //       path:'admin',
  //       loadChildren:  () => import('./admin/admin.module').then(m => m.AdminModule),
  //     }
  //   ]
  // },

  // {
  //   path: '',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
