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
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { BookFormComponent } from './book-form.component';
import { BookService } from '../book.service'

describe('Component: BookForm', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ROUTER_FAKE_PROVIDERS,
    BookService,
    BookFormComponent
  ]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BookFormComponent],
      (component: BookFormComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BookFormComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BookFormComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-book-form></app-book-form>
  `,
  directives: [BookFormComponent]
})
class BookFormComponentTestController {
}

