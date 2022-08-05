import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageBookComponent } from '../manage-book/manage-book.component';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { ViewDetailsComponent } from '../view-details/view-details.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'view-details/:id',
        component: ViewDetailsComponent
      },
      {
        path: 'manage-book',
        component: ManageBookComponent
      },
      {
        path: 'update-book/:id',
        component: UpdateBookComponent
      },
      {
        path: '',
        redirectTo: 'manage-book',
        // pathMatch: 'full'
      },
    
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RRoutingModuleModule { }
