import { next } from '@ember/runloop';
import type { EditoredComponent } from 'ember-cite/components/references/base/component';
import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type Person from 'ember-cite/models/person';
import type { ReferenceFields } from 'ember-cite/models/reference';
import type { BookFields } from 'ember-cite/models/references/book';
import BookReference from 'ember-cite/models/references/book';

interface BookEntryArgs extends BookFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class BookEntryComponent
  extends ReferencesBaseComponent<BookEntryArgs>
  implements EditoredComponent
{
  reference: BookReference;

  constructor(owner: unknown, args: BookEntryArgs) {
    super(owner, args);

    this.reference = new BookReference(args);

    args.parent.addReference(this.reference);
  }

  addEditor(person: Person) {
    next(() => {
      this.reference.editors.push(person);
    });
  }
}
