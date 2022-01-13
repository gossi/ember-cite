import Component from '@glimmer/component';

import {
  BaseComponent,
  PersonArgs
} from 'ember-cite/components/references/base/component';
import { argsToPerson } from 'ember-cite/utils/person';

interface ReferencesRefAuthorArgs extends PersonArgs {
  parent: BaseComponent;
}

export default class ReferencesReferenceAuthorComponent extends Component<
  ReferencesRefAuthorArgs
> {
  constructor(owner: unknown, args: ReferencesRefAuthorArgs) {
    super(owner, args);
    args.parent.addAuthor(argsToPerson(args));
  }
}
