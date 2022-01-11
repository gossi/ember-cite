import Reference from 'ember-cite/models/reference';
import { ReferenceType } from 'ember-cite/types/reference';

export interface JournalFields {
  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}

export default class JournalReference extends Reference
  implements JournalFields {
  type = ReferenceType.Journal;

  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}
