import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import { BaseComponent } from 'ember-references/components/references/base/component';

interface ReferencesRefAuthorArgs {
  parent: BaseComponent;
  given: string;
  family: string;
  middle: string;
  name: string;
}

export default class ReferencesReferenceAuthorComponent extends Component<
  ReferencesRefAuthorArgs
> {
  constructor(owner: Owner, args: ReferencesRefAuthorArgs) {
    super(owner, args);

    const middle = args.middle ? args.middle.split(' ') : [];

    args.parent.addAuthor({
      ...args,
      middle
    });
  }
}
