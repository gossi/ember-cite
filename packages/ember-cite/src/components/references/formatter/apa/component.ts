import Component from '@glimmer/component';

import Reference from 'ember-cite/models/reference';

// import { importSync } from '@embroider/macros';
// import { ensureSafeComponent } from '@embroider/util';

export interface ReferencesFormatterApaArgs {
  reference: Reference;
}

export default class ReferencesFormatterApaComponent extends Component<
  ReferencesFormatterApaArgs
> {
  // makeFormatter(reference: Reference) {
  //   const module = importSync(`./${reference.type}`);
  //   // @ts-ignore
  //   return ensureSafeComponent(module.default, this);
  // }
}
