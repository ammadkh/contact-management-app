import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id/email_addresses', component: ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
