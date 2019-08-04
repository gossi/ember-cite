import Reference from 'ember-references/models/reference';
import { ReferenceType } from 'ember-references/types/reference';

export interface JournalFields {
  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}

export default class JournalReference extends Reference
  implements JournalFields {
  type = ReferenceType.JOURNAL;

  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}
