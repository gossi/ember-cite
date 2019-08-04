import Person from 'ember-references/models/person';
import Reference from 'ember-references/models/reference';
import { ReferenceType } from 'ember-references/types/reference';

import TrackedArray from 'tracked-array';

export interface BookFields {
  edition?: string;
  chapter?: string;
  pages?: string;

  editors: Person[];
  publisher?: string;
  address?: string;
}

export default class BookReference extends Reference implements BookFields {
  type = ReferenceType.BOOK;

  editors: Person[] = new TrackedArray();
}
