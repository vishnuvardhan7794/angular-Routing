import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AdminComponent } from '../admin/admin.component';

let router: Routes = [
  {
    path: 'admin',
    component:AdminComponent,
    pathMatch: 'full',
    // children: [
    //   {
    //     path: 'add-item',
    //     component: AddItemComponent
    //   },
    //   {
    //     path: 'add-user',
    //     component: AddUserComponent
    //   }
    // ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
