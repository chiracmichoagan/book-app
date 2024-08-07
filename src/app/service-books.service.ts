import { BOOKS } from './../mock-books';
import { Injectable } from '@angular/core';
import { BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceBooksService {
  books: BookInterface[] = BOOKS;

  constructor() {}

  //Methode de stockage des donéees
  getBOoks(): BookInterface[] {
    return this.books;
  }
}
