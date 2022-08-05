import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RRoutingModuleModule } from './r-routing-module/r-routing-module.module';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ManageBookComponent,
    UpdateBookComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewDetailsComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    RRoutingModuleModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RoutingExampleModule { }
