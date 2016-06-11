import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service'

@Component({
  moduleId: module.id,
  selector: 'app-book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css'],
  providers: [BookService]
})
export class BookFormComponent implements OnInit {
  book = new Book();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    this.bookService
        .save(this.book)
        .subscribe(response => this.router.navigate(['/book-list']));
  }
}
