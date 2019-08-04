import Component from '@glimmer/component';

import { Person } from 'ember-cite/components/references/reference';

interface ReferencesFormatterApaPersonArgs {
  person: Person;
  as: string;
}

export default class ReferencesFormatterApaPersonComponent extends Component<
  ReferencesFormatterApaPersonArgs
> {
  get initials(): string {
    const middle = this.args.person.middle ? this.args.person.middle : [];
    const names = [this.args.person.given, ...middle];
    const name = names.join(' ');

    let initials = '';
    let print = true;
    const length_ = name.length;

    for (let j = 0; j < length_; j++) {
      if (print) {
        initials += `${name[j].toUpperCase()}.`;
        print = false;
      }

      if (name[j] === ' ' || name[j] === '-') {
        initials += name[j];
        print = true;
      }
    }

    return initials;
  }
}
