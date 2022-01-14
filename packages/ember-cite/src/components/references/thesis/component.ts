import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type { ReferenceFields } from 'ember-cite/models/reference';
import type { ThesisFields } from 'ember-cite/models/references/thesis';
import ThesisReference from 'ember-cite/models/references/thesis';

interface ThesisEntryArgs extends ThesisFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ThesisEntryComponent extends ReferencesBaseComponent<ThesisEntryArgs> {
  reference: ThesisReference;

  constructor(owner: unknown, args: ThesisEntryArgs) {
    super(owner, args);

    this.reference = new ThesisReference(args);

    args.parent.addReference(this.reference);
  }
}
