import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import MultimediaReference, {
  MultimediaFields
} from 'ember-cite/models/references/multimedia';

interface ReferencesMultimediaArgs extends MultimediaFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesMultimediaComponent extends ReferencesBaseComponent<
  ReferencesMultimediaArgs
> {
  reference: MultimediaReference;

  constructor(owner: Owner, args: ReferencesMultimediaArgs) {
    super(owner, args);

    this.reference = new MultimediaReference(args);

    args.parent.addReference(this.reference);
  }
}
