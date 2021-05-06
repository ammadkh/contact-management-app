import { ContactService } from './../../services/contact.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ContactDetailComponent } from './contact-detail.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

fdescribe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  const contactServiceStub = {
    getEmailAddressesById() {
      return of(
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "email": ["Lucio_Hettinger@annie.ca",
          "Lucio_Hettinger@annie2.ca",
          "Lucio_Hettinger@annie3.ca"
        ]
        }
      );
    }
  }

  const locationStub = {
    back() {
      return true;
    }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ],
      providers: [
        { provide: Location, useValue: locationStub},
        {provide: ContactService, useValue: contactServiceStub},
        {provide: ActivatedRoute, useValue: {params: of({id: 5})}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set the emails and contact name', fakeAsync(() => {
    tick();
    expect(component).toBeTruthy();
    expect(component.contactEmails.length).toBe(3);
    expect(component.contactName).toBe('Chelsey Dietrich');
  }));
});
