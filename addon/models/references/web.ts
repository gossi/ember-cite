import Reference from 'ember-cite/models/reference';
import { ReferenceType } from 'ember-cite/types/reference';
import { WebFormat } from 'ember-cite/types/web';

export interface WebFields {
  format?: WebFormat;
}

export default class WebReference extends Reference implements WebFields {
  type = ReferenceType.WEB;

  // format?: WebFormat;
}
