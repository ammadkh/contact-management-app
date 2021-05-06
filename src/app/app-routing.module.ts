import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {path: '**', redirectTo: 'contacts'} // 404 component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
