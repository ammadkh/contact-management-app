import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
