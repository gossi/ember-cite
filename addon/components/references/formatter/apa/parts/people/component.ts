import Component from '@glimmer/component';

import { Person } from 'ember-cite/components/references/reference';

interface ReferencesFormatterApaPeopleArgs {
  people: Person[];
  as: string;
}

export default class ReferencesFormatterApaPeopleComponent extends Component<
  ReferencesFormatterApaPeopleArgs
> {
  get amount(): number {
    // the minus 2 is to not do that math in the template, but just run the
    // comparison on that value
    // -> we need at minimum two people to print a delimiter
    return this.args.people.length - 2;
  }
}
