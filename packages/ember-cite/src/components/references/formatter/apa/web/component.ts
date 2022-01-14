import Component from '@glimmer/component';

import type WebReference from 'ember-cite/models/references/web';
import { lookupWebType } from 'ember-cite/utils/microformats';

export interface WebApaFormatterArgs {
  reference: WebReference;
}

export default class WebApaFormatterComponent extends Component<WebApaFormatterArgs> {
  /**
   * itemtype from the given format
   */
  type: string;

  constructor(owner: unknown, args: WebApaFormatterArgs) {
    super(owner, args);

    this.type = lookupWebType(args.reference.format);
  }
}
