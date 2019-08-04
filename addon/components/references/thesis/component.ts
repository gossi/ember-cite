import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import ThesisReference, {
  ThesisFields
} from 'ember-cite/models/references/thesis';

interface ReferencesThesisArgs extends ThesisFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesThesisComponent extends ReferencesBaseComponent<
  ReferencesThesisArgs
> {
  reference: ThesisReference;

  constructor(owner: Owner, args: ReferencesThesisArgs) {
    super(owner, args);

    this.reference = new ThesisReference(args);

    args.parent.addReference(this.reference);
  }
}
