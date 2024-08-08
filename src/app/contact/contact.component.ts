import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required]),
    message : new FormControl('',[Validators.required]),
  });

  onSubmit() {
    console.log(this.contactForm.value.name);
    
  };

  updateForm() {
    this.contactForm.patchValue({
      name: 'Nancy',
      phone: ''
    });
  };
  // updateForm() {
  //   this.contactForm.setValue({
  //     name : 'dona',
  //   email : 'chino@gmail.com',
  //   phone : '22952947916',
  //   message : 'je suis codeur',
  //   });
  // }
}
