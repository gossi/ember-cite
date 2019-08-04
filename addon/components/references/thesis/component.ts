import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-references/components/references/base/component';
import ReferencesComponent from 'ember-references/components/references/component';
import { ReferenceFields } from 'ember-references/models/reference';
import ThesisReference, {
  ThesisFields
} from 'ember-references/models/references/thesis';

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
