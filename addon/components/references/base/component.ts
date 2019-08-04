import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import Person from 'ember-cite/models/person';
import Reference from 'ember-cite/models/reference';

export interface BaseComponent {
  addAuthor: (author: Person) => void;
}

export interface ReferencesBaseArgs {
  parent: BaseComponent;
}

export default class ReferencesBaseComponent<T extends object>
  extends Component<T>
  implements BaseComponent {
  @tracked reference!: Reference;

  addAuthor(person: Person) {
    this.reference.authors.push(person);
    this.reference.updateId();
  }
}
