import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-references/components/references/base/component';
import ReferencesComponent from 'ember-references/components/references/component';
import { ReferenceFields } from 'ember-references/models/reference';
import JournalReference, {
  JournalFields
} from 'ember-references/models/references/journal';

interface ReferencesJournalArgs extends JournalFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesJournalComponent extends ReferencesBaseComponent<
  ReferencesJournalArgs
> {
  reference: JournalReference;

  constructor(owner: Owner, args: ReferencesJournalArgs) {
    super(owner, args);

    this.reference = new JournalReference(args);

    args.parent.addReference(this.reference);
  }
}
