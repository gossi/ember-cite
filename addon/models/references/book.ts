import Person from 'ember-cite/models/person';
import Reference from 'ember-cite/models/reference';
import { ReferenceType } from 'ember-cite/types/reference';

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
  type = ReferenceType.Book;

  editors: Person[] = new TrackedArray();
}
