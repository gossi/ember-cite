import { Owner } from '@glimmer/di';

import ReferencesBaseComponent, {
  EditoredComponent
} from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import Person from 'ember-cite/models/person';
import { ReferenceFields } from 'ember-cite/models/reference';
import BookReference, { BookFields } from 'ember-cite/models/references/book';

interface ReferencesBookArgs extends BookFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesBookComponent
  extends ReferencesBaseComponent<ReferencesBookArgs>
  implements EditoredComponent {
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
