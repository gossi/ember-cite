import { Owner } from '@glimmer/di';

import ReferencesBaseComponent from 'ember-references/components/references/base/component';
import ReferencesComponent from 'ember-references/components/references/component';
import Person from 'ember-references/models/person';
import { ReferenceFields } from 'ember-references/models/reference';
import BookReference, {
  BookFields
} from 'ember-references/models/references/book';

interface ReferencesBookArgs extends BookFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesBookComponent extends ReferencesBaseComponent<
  ReferencesBookArgs
> {
  reference: BookReference;

  constructor(owner: Owner, args: ReferencesBookArgs) {
    super(owner, args);

    this.reference = new BookReference(args);

    args.parent.addReference(this.reference);
  }

  addEditor(person: Person) {
    this.reference.editors.push(person);
  }
}
