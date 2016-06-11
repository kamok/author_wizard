import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { By } from '@angular/platform-browser';
import { BookService } from '../book.service'
import { BookListComponent } from './book-list.component';

describe('Component: BookList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    BookService,
    BookListComponent
  ]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BookListComponent],
      (component: BookListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BookListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BookListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-book-list></app-book-list>
  `,
  directives: [BookListComponent]
})
class BookListComponentTestController {
}

