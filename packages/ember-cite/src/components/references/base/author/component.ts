import Component from '@glimmer/component';
import type {
  BaseComponent,
  PersonArgs
} from 'ember-cite/components/references/base/component';
import { argsToPerson } from 'ember-cite/utils/person';

interface AuthorEntryArgs extends PersonArgs {
  parent: BaseComponent;
}

export default class AuthorEntryComponent extends Component<AuthorEntryArgs> {
  constructor(owner: unknown, args: AuthorEntryArgs) {
    super(owner, args);
    args.parent.addAuthor(argsToPerson(args));
  }
}
