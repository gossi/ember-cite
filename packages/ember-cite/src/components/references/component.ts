import Component from '@glimmer/component';

import FormatterFactory, {
  Formatter
} from 'ember-cite/components/references/formatter';
import Reference from 'ember-cite/models/reference';
import { next } from '@ember/runloop';

import { tracked } from 'tracked-built-ins';

import { ensureSafeComponent } from '@embroider/util';
import ApaFormatter from './formatter/apa/component';

interface ReferencesArgs {
  style?: string;
}

export default class ReferencesComponent extends Component<ReferencesArgs> {
  @tracked entries: Reference[] = tracked([]);
  formatter: Formatter;

  style: string;

  get references(): Reference[] {
    return this.formatter.sort(this.entries);
  }

  get formatterComponent() {
    return ensureSafeComponent(`references/formatter/${this.style}` || ApaFormatter, this);
  }

  constructor(owner: unknown, args: ReferencesArgs) {
    super(owner, args);

    this.style = args.style || 'apa';
    this.formatter = FormatterFactory.createFormattter(this.style);
  }

  addReference(reference: Reference) {
    next(() => {
      this.entries.push(reference);
      this.formatter.fix(this.entries);
    });
  }
}
