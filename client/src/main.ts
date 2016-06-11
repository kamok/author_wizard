import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AuthorWizardAppComponent, environment } from './app/';
import { Http, HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AuthorWizardAppComponent, [HTTP_PROVIDERS]);
