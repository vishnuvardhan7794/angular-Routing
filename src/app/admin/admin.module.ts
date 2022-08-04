import { NgModule } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    AdminComponent,
    AddUserComponent,
    AddItemComponent,
  ],
  imports: [
    SharedModuleModule,
    AdminRoutingModule
  ]
})
export class AdminModule { 
}
