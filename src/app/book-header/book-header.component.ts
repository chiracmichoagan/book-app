import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css',
})
export class BookHeaderComponent {
  affiche: boolean = false;
  @Output() passValue = new EventEmitter<boolean>();

  afficheForm() {
    this.affiche = !this.affiche;
    this.passValue.emit(this.affiche);
  }
}
