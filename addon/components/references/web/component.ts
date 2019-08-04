import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-references/components/references/base/component';
import ReferencesComponent from 'ember-references/components/references/component';
import { ReferenceFields } from 'ember-references/models/reference';
import WebReference, {
  WebFields
} from 'ember-references/models/references/web';

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
