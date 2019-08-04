import ApaFormatter from 'ember-cite/components/references/formatter/apa/formatter';
import { Reference } from 'ember-cite/components/references/reference';

export interface Formatter {
  sort(references: Reference[]): Reference[];
}

export default class FormatterFactory {
  static createFormattter(type: string): Formatter {
    if (type === 'apa') {
      return new ApaFormatter();
    }

    throw new Error(`cannot find formatter ${type}`);
  }
}
