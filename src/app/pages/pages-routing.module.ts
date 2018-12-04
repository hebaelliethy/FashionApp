import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    //    {
    //      path: 'FashionHome',
    //      loadChildren: './FashionHome/FashionHome-page.module#FashionHomePageModule'
    //    },
    //   {
    //     path: 'actions',
    //     loadChildren: './actions/actions-page.module#ActionsPageModule'
    //   },
    //   {
    //     path: 'contacts',
    //     loadChildren: './contacts/contacts-page.module#ContactsPageModule'
    //   },
       {
         path: '',
         redirectTo: 'FashionHome',
         pathMatch: 'full'
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
