import type Person from 'ember-cite/models/person';
import type { ReferenceFields } from 'ember-cite/models/reference';
import Reference from 'ember-cite/models/reference';
import { Medium } from 'ember-cite/types/media';
import { ReferenceType } from 'ember-cite/types/reference';
import { tracked } from 'tracked-built-ins';

export interface MediaFields {
  medium?: Medium;
}

export default class MediaReference extends Reference implements MediaFields {
  type = ReferenceType.Media;

  medium: Medium;

  producers: Person[] = tracked([]);

  constructor(medium: Medium, properties: ReferenceFields) {
    super(properties);

    this.medium = medium;
  }
}
