import Component from '@glimmer/component';

import type Person from 'ember-cite/models/person';

interface PersonApaFormatterArgs {
  person: Person;
  as: string;
}

export default class PersonApaFormatterComponent extends Component<PersonApaFormatterArgs> {
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
