import type Person from 'ember-cite/models/person';
import type { ReferenceType } from 'ember-cite/types/reference';
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

  #id?: string;

  private get rawId() {
    const names = this.authors.reduce((previous, person: Person) => {
      return `${previous}${person.name ? person.name : person.family}`;
    }, '');

    return `${names.toLowerCase()}${this.year}`;
  }

  set id(id: string) {
    this.#id = id;
  }

  get id() {
    if (this.#id) {
      return this.#id;
    }

    return `${this.rawId}${this.yearSuffix ?? ''}`;
  }

  title?: string;

  year?: number;
  month?: number;
  day?: number;
  yearSuffix?: string;

  url?: string;
  retrieval?: string;
  doi?: string;

  authors: Person[] = tracked([]);

  constructor(properties: ReferenceFields) {
    Object.assign(this, properties);
  }
}
