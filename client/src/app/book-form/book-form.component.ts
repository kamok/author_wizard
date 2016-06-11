import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  moduleId: module.id,
  selector: 'app-book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  book = new Book();

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
  }
}
