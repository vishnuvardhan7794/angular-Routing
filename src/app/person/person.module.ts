import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';
import { ListComponent } from './components/list/list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';



@NgModule({
  declarations: [
    PersonComponent,
    ListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }
