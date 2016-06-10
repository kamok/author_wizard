import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AuthorWizardAppComponent } from '../app/author-wizard.component';

beforeEachProviders(() => [AuthorWizardAppComponent]);

describe('App: AuthorWizard', () => {
  it('should create the app',
      inject([AuthorWizardAppComponent], (app: AuthorWizardAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'author-wizard works!\'',
      inject([AuthorWizardAppComponent], (app: AuthorWizardAppComponent) => {
    expect(app.title).toEqual('author-wizard works!');
  }));
});
