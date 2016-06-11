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
import { NewBookComponent } from './new-book.component';

describe('Component: NewBook', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    ROUTER_FAKE_PROVIDERS,
    NewBookComponent
  ]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([NewBookComponent],
      (component: NewBookComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(NewBookComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(NewBookComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-new-book></app-new-book>
  `,
  directives: [NewBookComponent]
})
class NewBookComponentTestController {
}

