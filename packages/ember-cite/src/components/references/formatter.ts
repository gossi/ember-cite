import ApaFormatter from 'ember-cite/components/references/formatter/apa/formatter';
import Reference from 'ember-cite/models/reference';

export interface Formatter {
  sort(references: Reference[]): Reference[];

  fix(references: Reference[]): void;
}

export default class FormatterFactory {
  static createFormattter(type: string): Formatter {
    if (type === 'apa') {
      return new ApaFormatter();
    }

    throw new Error(`cannot find formatter ${type}`);
  }
}
