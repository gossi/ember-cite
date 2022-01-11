import Person from 'ember-cite/models/person';
import Reference, { ReferenceFields } from 'ember-cite/models/reference';
import { Medium } from 'ember-cite/types/media';
import { ReferenceType } from 'ember-cite/types/reference';

import { tracked } from 'ember-deep-tracked';

export interface MediaFields {
  medium?: Medium;
}

export default class MediaReference extends Reference implements MediaFields {
  type = ReferenceType.Media;

  medium: Medium;

  @tracked producers: Person[] = [];

  constructor(medium: Medium, properties: ReferenceFields) {
    super(properties);

    this.medium = medium;
  }
}
