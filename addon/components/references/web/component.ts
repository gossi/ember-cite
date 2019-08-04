import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import WebReference, {
  WebFields
} from 'ember-cite/models/references/web';

interface ReferencesWebArgs extends WebFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesWebComponent extends ReferencesBaseComponent<
  ReferencesWebArgs
> {
  reference: WebReference;

  constructor(owner: Owner, args: ReferencesWebArgs) {
    super(owner, args);

    this.reference = new WebReference(args);

    args.parent.addReference(this.reference);
  }
}
