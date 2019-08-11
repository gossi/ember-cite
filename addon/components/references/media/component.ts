import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import MediaReference, {
  MediaFields
} from 'ember-cite/models/references/media';
import { Medium } from 'ember-cite/types/media';

export interface ReferencesMediaArgs extends MediaFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesMediaComponent extends ReferencesBaseComponent<
  ReferencesMediaArgs
> {
  reference: MediaReference;

  constructor(owner: Owner, args: ReferencesMediaArgs) {
    super(owner, args);

    this.reference = new MediaReference(Medium.Media, args);

    args.parent.addReference(this.reference);
  }
}
