import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import ReferencesBookComponent from 'ember-cite/components/references/book/component';

interface ReferencesRefEditorArgs {
  parent: ReferencesBookComponent;
  given: string;
  family: string;
  middle: string;
  name: string;
}

export default class ReferencesReferenceEditorComponent extends Component<
  ReferencesRefEditorArgs
> {
  constructor(owner: Owner, args: ReferencesRefEditorArgs) {
    super(owner, args);

    const middle = args.middle ? args.middle.split(' ') : [];

    args.parent.addEditor({
      ...args,
      middle
    });
  }
}
