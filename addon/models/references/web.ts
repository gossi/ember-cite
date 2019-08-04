import Reference from 'ember-references/models/reference';
import { ReferenceType } from 'ember-references/types/reference';
import { WebFormat } from 'ember-references/types/web';

export interface WebFields {
  format?: WebFormat;
}

export default class WebReference extends Reference implements WebFields {
  type = ReferenceType.WEB;

  format?: WebFormat;
}
