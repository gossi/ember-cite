import { next } from '@ember/runloop';
import { ensureSafeComponent } from '@embroider/util';
import Component from '@glimmer/component';

import ApaFormatterComponent from 'ember-cite/components/references/formatter/apa/component';
import FormatterFactory from 'ember-cite/formatter/factory';
import type Formatter from 'ember-cite/formatter/formatter';
import Reference from 'ember-cite/models/reference';
import { tracked } from 'tracked-built-ins';
import { cached } from '@glimmer/tracking';

interface ReferencesArgs {
  style?: string;
}

export default class ReferencesComponent extends Component<ReferencesArgs> {
  @tracked entries: Reference[] = tracked([]);
  formatter: Formatter;

  style: string;

  @cached
  get references(): Reference[] {
    this.formatter.fix(this.entries);
    return this.formatter.sort(this.entries);
  }

  get formatterComponent() {
    return ensureSafeComponent(
      `references/formatter/${this.style}` || ApaFormatterComponent,
      this
    );
  }

  constructor(owner: unknown, args: ReferencesArgs) {
    super(owner, args);

    this.style = args.style || 'apa';
    this.formatter = FormatterFactory.createFormattter(this.style);
  }

  addReference(reference: Reference) {
    next(() => {
      this.entries.push(reference);
    });
  }
}
