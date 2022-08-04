import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AdminComponent } from './admin.component';

let router: Routes = [
  {
    path: '',
    component: AdminComponent,
    pathMatch:'full',
    children: [
      {
        path: 'additem',
        component: AddItemComponent,
      },
      {
        path: 'adduser',
        component: AddUserComponent
      }
    ]
  },
  // {
  //   path:'addItem',
  //   component: AddItemComponent,

  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  constructor() {
    console.log('admin router...', router)
  }
}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { AddItemComponent } from '../add-item/add-item.component';
// import { AddUserComponent } from '../add-user/add-user.component';
// import { AdminComponent } from './admin.component';

// const adminRoutes: Routes = [
//   {
//     path: '',
//     component: AdminComponent,
//     children: [
//       // children: [
//         { path: 'crises', component: AddItemComponent },
//         { path: 'heroes', component: AddUserComponent },
//       // ]
//     ]
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forChild(adminRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AdminRoutingModule {
//   constructor() {
//     console.log('admin router...',)
//   }
// }
