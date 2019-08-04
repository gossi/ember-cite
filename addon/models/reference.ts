import Person from 'ember-references/models/person';
import { ReferenceType } from 'ember-references/types/reference';

import TrackedArray from 'tracked-array';

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

export default class Reference implements ReferenceFields {
  authors: Person[] = new TrackedArray();

  constructor(properties: ReferenceFields) {
    Object.assign(this, properties);
  }
}
