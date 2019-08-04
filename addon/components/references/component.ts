import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';
import { tracked } from '@glimmer/tracking';

import FormatterFactory, {
  Formatter
} from 'ember-cite/components/references/formatter';
import Reference from 'ember-cite/models/reference';

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

    this.fixYearSuffices();
  }

  private fixYearSuffices() {
    const store: { [rawId: string]: Reference[] } = {};
    for (const entry of this.entries) {
      const id = entry.compileRawId();
      if (!store[id]) {
        store[id] = [];
      }

      store[id].push(entry);
    }

    for (const references of Object.values(store)) {
      if (references.length > 1) {
        for (const reference of references) {
          const i = references.indexOf(reference);
          reference.yearSuffix = String.fromCharCode(97 + i);
          reference.updateId();
        }
      }
    }
  }
}
