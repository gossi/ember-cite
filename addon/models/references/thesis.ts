import Reference from 'ember-references/models/reference';
import { ReferenceType } from 'ember-references/types/reference';

export interface ThesisFields {
  /**
   * Type of document (e.g. Unpublished doctoral thesis)
   */
  document?: string;

  /**
   * Full name of institution
   */
  institution?: string;
  location?: string;
}

export default class ThesisReference extends Reference implements ThesisFields {
  type = ReferenceType.THESIS;

  document?: string;
  institution?: string;
  location?: string;
}
