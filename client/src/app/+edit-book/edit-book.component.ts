import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { BookFormComponent } from '../book-form';

@Component({
  moduleId: module.id,
  selector: 'app-edit-book',
  templateUrl: 'edit-book.component.html',
  styleUrls: ['edit-book.component.css'],
  directives: [BookFormComponent]
})
export class EditBookComponent implements OnInit {
  id: string;

  constructor(private routeSegment: RouteSegment) {}

  ngOnInit() {
    this.id = this.routeSegment.getParam('id');
  }

}
