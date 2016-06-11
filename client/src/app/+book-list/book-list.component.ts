import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service'

@Component({
  moduleId: module.id,
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  providers: [BookService]
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.bookService
        .getList()
        .subscribe(response => this.books = response.json());
  }

  goToNew() {
    this.router.navigate(['/new-book'])
  }
}
