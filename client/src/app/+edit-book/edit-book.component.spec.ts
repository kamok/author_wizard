import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteSegment, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { EditBookComponent } from './edit-book.component';

export class MockRouteSegment implements RouteSegment {
  urlSegments: any;
  parameters: any;
  outlet: string;
  _type: any;
  _componentFactory: any;
  type: any;
  stringifiedUrlSegments: string;

  constructor(parameters?: { [key: string]: any; }) {
    this.parameters = parameters;
  }

  getParam(param:string) {
    return this.parameters[param];
  }
}

describe('Component: EditBook', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(RouteSegment, { useValue: new MockRouteSegment({ 'id': '1' }) }),
    HTTP_PROVIDERS,
    ROUTER_FAKE_PROVIDERS,
    EditBookComponent
  ]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([EditBookComponent],
      (component: EditBookComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(EditBookComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(EditBookComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-edit-book></app-edit-book>
  `,
  directives: [EditBookComponent]
})
class EditBookComponentTestController {
}

