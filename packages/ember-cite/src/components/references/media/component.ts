import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type { ReferenceFields } from 'ember-cite/models/reference';
import type { MediaFields } from 'ember-cite/models/references/media';
import MediaReference from 'ember-cite/models/references/media';
import { Medium } from 'ember-cite/types/media';

export interface MediaEntryArgs extends MediaFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class MediaEntryComponent extends ReferencesBaseComponent<MediaEntryArgs> {
  reference: MediaReference;

  constructor(owner: unknown, args: MediaEntryArgs) {
    super(owner, args);

    this.reference = new MediaReference(Medium.Media, args);

    args.parent.addReference(this.reference);
  }
}
