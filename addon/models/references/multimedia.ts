import Reference from 'ember-cite/models/reference';
import { Medium } from 'ember-cite/types/media';
import { ReferenceType } from 'ember-cite/types/reference';

export interface MultimediaFields {
  medium?: Medium;
  series?: string;
}

export default class MultimediaReference extends Reference
  implements MultimediaFields {
  type = ReferenceType.MULTIMEDIA;
}
