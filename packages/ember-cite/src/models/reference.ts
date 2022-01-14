import type Person from 'ember-cite/models/person';
import type { ReferenceType } from 'ember-cite/types/reference';

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

  id = '';
  title?: string;

  year?: number;
  month?: number;
  day?: number;
  yearSuffix?: string;

  url?: string;
  retrieval?: string;
  doi?: string;

  authors: Person[] = [];

  private manageId = false;

  constructor(properties: ReferenceFields) {
    Object.assign(this, properties);

    if (!this.id || this.id === '') {
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
