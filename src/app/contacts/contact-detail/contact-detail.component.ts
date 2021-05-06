import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contactId: number;
  contactEmails: Array<String> = []
  contactName: any;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = params['id'];
      this.getEmailAddresses();
    })
  }

  getEmailAddresses() {
    this.contactService.getEmailAddressesById(this.contactId).subscribe((response:any) => {
      this.contactEmails = response.email;
      this.contactName = response.name;
    }, error => console.log(error))
  }

  onBack() {
    this.location.back();
  }

}
