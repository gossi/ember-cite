import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';
import { tracked } from '@glimmer/tracking';

import FormatterFactory, {
  Formatter
} from 'ember-references/components/references/formatter';
import Reference from 'ember-references/models/reference';

import TrackedArray from 'tracked-array';

interface ReferencesArgs {
  style?: string;
}

export default class ReferencesComponent extends Component<ReferencesArgs> {
  @tracked entries: Reference[] = new TrackedArray();
  formatter: Formatter;

  style: string;

  get references(): Reference[] {
    return this.formatter.sort(this.entries);
  }

  constructor(owner: Owner, args: ReferencesArgs) {
    super(owner, args);

    this.style = args.style || 'apa';
    this.formatter = FormatterFactory.createFormattter(this.style);
  }

  addReference(reference: Reference) {
    this.entries.push(reference);
  }
}
