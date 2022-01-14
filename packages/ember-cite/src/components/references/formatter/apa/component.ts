import Component from '@glimmer/component';

import Reference from 'ember-cite/models/reference';

// import { importSync } from '@embroider/macros';
// import { ensureSafeComponent } from '@embroider/util';

export interface ApaFormatterArgs {
  reference: Reference;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ApaFormatterComponent extends Component<ApaFormatterArgs> {
  // makeFormatter(reference: Reference) {
  //   const module = importSync(`./${reference.type}`);
  //   // @ts-ignore
  //   return ensureSafeComponent(module.default, this);
  // }
}
