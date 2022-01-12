import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

import { next } from '@ember/runloop';

import Person from 'ember-cite/models/person';
import Reference from 'ember-cite/models/reference';

export interface BaseComponent {
  addAuthor: (author: Person) => void;
}

export interface EditoredComponent {
  addEditor: (editor: Person) => void;
}

export interface ProducedComponent {
  addProducer: (producer: Person) => void;
}

export interface ReferencesBaseArgs {
  parent: BaseComponent;
}

export interface PersonArgs {
  given: string;
  family: string;
  middle: string;
  name: string;
  role: string;
}

export default class ReferencesBaseComponent<T extends object>
  extends Component<T>
  implements BaseComponent {
  @tracked reference!: Reference;

  addAuthor(person: Person) {
    this.reference.authors.push(person);
    next(() => {
      this.reference.updateId();
    });
  }
}
