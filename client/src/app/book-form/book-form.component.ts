import { Component, Input, OnInit } from '@angular/core';
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
  @Input() id;
  book = new Book();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    if (this.id) {
      this.bookService
        .get(this.id)
        .subscribe(response => this.book = response.json());
    }
  }

  onSubmit() {
    this.bookService
      .save(this.book)
      .subscribe(response => this.router.navigate(['/book-list']));
  }
}
