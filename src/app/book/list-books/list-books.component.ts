import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'app/book/book.service';
import { Book } from 'app/book/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {

  constructor(
    private router: Router,
    private service: BookService) {
  }

  get books(): Book[] {
    return this.service.getAll();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/books', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/books', id, 'edit']);
    return false;
  }

  destroy(id) {
    if (confirm('Are you sure?')) {
      this.service.delete(+id);
      this.service.changeMessage(`Book was successfully destroyed.`);
    }
    return false;
  }
}