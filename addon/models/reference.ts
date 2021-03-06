import Person from 'ember-cite/models/person';
import { ReferenceType } from 'ember-cite/types/reference';

import { tracked } from 'tracked-built-ins';

export interface ReferenceFields {
  id?: string;
  type?: ReferenceType;

  authors: Person[];
  title?: string;

  year?: number;
  month?: number;
  day?: number;
  yearSuffix?: string;

  url?: string;
  retrieval?: string;
  doi?: string;
}

export default abstract class Reference implements ReferenceFields {
  abstract type: ReferenceType;

  @tracked id?: string;
  title?: string;

  year?: number;
  month?: number;
  day?: number;
  yearSuffix?: string;

  url?: string;
  retrieval?: string;
  doi?: string;

  @tracked authors: Person[] = [];

  private manageId = false;

  constructor(properties: ReferenceFields) {
    Object.assign(this, properties);

    if (!this.id) {
      this.manageId = true;
      this.id = this.compileId();
    }
  }

  compileRawId() {
    const names = this.authors.reduce((previous, person: Person) => {
      return `${previous}${person.name ? person.name : person.family}`;
    }, '');

    return `${names.toLowerCase()}${this.year}`;
  }

  compileId() {
    return `${this.compileRawId()}${this.yearSuffix ? this.yearSuffix : ''}`;
  }

  updateId() {
    if (this.manageId) {
      this.id = this.compileId();
    }
  }
}
