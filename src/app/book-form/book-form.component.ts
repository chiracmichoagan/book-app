import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  @Input() affiche!: boolean;
  inputForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    status: new FormControl(''),
  });
  // constructor(private BooksService: ServiceBooksService)
}
