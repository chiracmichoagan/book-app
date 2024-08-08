import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  message = new FormControl('');
}
