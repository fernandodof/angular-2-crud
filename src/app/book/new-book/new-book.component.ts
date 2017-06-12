import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './../book';
import { BookService } from './../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {

  constructor(private router: Router, private bookService: BookService) { }

  onSubmit(form: any) {
    this.bookService.add(new Book(form.name, form.author));
    this.router.navigate(['/books']);
  }

}
