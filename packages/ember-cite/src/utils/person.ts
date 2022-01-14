import type { PersonArgs } from 'ember-cite/components/references/base/component';
import type Person from 'ember-cite/models/person';

export function argsToPerson(args: PersonArgs): Person {
  const middle = args.middle ? args.middle.split(' ') : [];

  return {
    ...args,
    middle
  };
}
