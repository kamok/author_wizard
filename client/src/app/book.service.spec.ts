import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { BookService } from './book.service';

describe('Book Service', () => {
  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    BookService
  ]);

  it('should ...',
      inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
