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

  load() {
    this.bookService
      .getList()
      .subscribe(response => this.books = response.json());
  }

  ngOnInit() {
    this.load();
  }

  goToNew() {
    this.router.navigate(['/new-book'])
  }

  edit(id) {
    this.router.navigate(['/edit-book/' + id])
  }

  delete(id) {
    this.bookService.delete(id).subscribe(response => this.load());
  }
}
