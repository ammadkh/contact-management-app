import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList: any;
  searchForm: FormGroup;
  contacts: any;
  constructor(private contactService: ContactService) {
    this.searchForm = new FormGroup({
      'search': new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getContacts();
    this.searchForm.get('search').valueChanges.subscribe(value => {
      console.log(value);
      this.contactList = this.contacts;
      if(value) {
          this.contactList = this.contactList.filter(contact =>  contact.name.toLowerCase().includes(value.toLowerCase()))
        } else {
          this.contactList = this.contacts;
        }
    })
  }

  getContacts() {
    this.contactService.getContacts().subscribe(res => {
      this.contactList = res;
      this.contacts = this.contactList;
    }, error => { console.log(error)})
  }

}
