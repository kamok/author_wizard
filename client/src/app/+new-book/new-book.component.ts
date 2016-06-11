import { Component, OnInit } from '@angular/core';
import { BookFormComponent } from '../book-form';

@Component({
  moduleId: module.id,
  selector: 'app-new-book',
  templateUrl: 'new-book.component.html',
  styleUrls: ['new-book.component.css'],
  directives: [BookFormComponent]
})
export class NewBookComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
