import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { CountryModule } from './country/country.module';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './mixins/first/first.component';
import { SecondComponent } from './mixins/second/second.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then(mod => mod.CountryModule)
  },

  {
    path: 'routing',
    loadChildren: () => import('./routing-example/routing-example.module').then((r) => r.RoutingExampleModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/country',
  //   pathMatch: 'full'
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
