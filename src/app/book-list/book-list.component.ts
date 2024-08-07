import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book-interface';
import { ServiceBooksService } from '../service-books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent implements OnInit{
books?: BookInterface[];
constructor(private BooksService:ServiceBooksService){}
ngOnInit(): void {
  this.books = this.BooksService.getBOoks();
}
}
