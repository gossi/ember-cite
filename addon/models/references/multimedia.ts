import Reference from 'ember-references/models/reference';
import { Medium } from 'ember-references/types/media';
import { ReferenceType } from 'ember-references/types/reference';

export interface MultimediaFields {
  medium?: Medium;
  series?: string;
}

export default class MultimediaReference extends Reference
  implements MultimediaFields {
  type = ReferenceType.MULTIMEDIA;
}
