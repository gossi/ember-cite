import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import JournalReference, {
  JournalFields
} from 'ember-cite/models/references/journal';

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
