import ApaFormatter from 'ember-cite/formatter/apa';
import type Formatter from 'ember-cite/formatter/formatter';

export default class FormatterFactory {
  static createFormattter(type: string): Formatter {
    if (type === 'apa') {
      return new ApaFormatter();
    }

    throw new Error(`cannot find formatter ${type}`);
  }
}
