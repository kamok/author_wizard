import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit {
	books: any;

  constructor(private http: Http) { }

  ngOnInit() {
  	this.http.get('/api/books.json')
  		.subscribe(response => this.books = response.json());
  }

}
