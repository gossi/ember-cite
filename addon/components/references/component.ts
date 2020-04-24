import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import FormatterFactory, {
  Formatter
} from 'ember-cite/components/references/formatter';
import Reference from 'ember-cite/models/reference';

import { tracked } from 'tracked-built-ins';

interface ReferencesArgs {
  style?: string;
}

export default class ReferencesComponent extends Component<ReferencesArgs> {
  @tracked entries: Reference[] = [];
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

  addReference(reference: Reference[]) {
    this.entries.push(reference);

    this.formatter.fix(this.entries);
  }
}
