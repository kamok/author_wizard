import { Component } from '@angular/core';
import { BookListComponent } from './+book-list';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { NewBookComponent } from './+new-book';
import { EditBookComponent } from './+edit-book';

@Component({
  moduleId: module.id,
  selector: 'author-wizard-app',
  templateUrl: 'author-wizard.component.html',
  styleUrls: ['author-wizard.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/book-list', component: BookListComponent},
  {path: '/new-book', component: NewBookComponent},
  {path: '/edit-book/:id', component: EditBookComponent}
])
export class AuthorWizardAppComponent {
  title = 'author-wizard works!';
}
