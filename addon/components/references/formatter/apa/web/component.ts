import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import WebReference from 'ember-cite/models/references/web';
import { lookupWebType } from 'ember-cite/utils/microformats';

export interface ReferencesFormatterApaWebArgs {
  reference: WebReference;
}

export default class ReferencesFormatterApaWebComponent extends Component<
  ReferencesFormatterApaWebArgs
> {
  /**
   * itemtype from the given format
   */
  type: string;

  constructor(owner: Owner, args: ReferencesFormatterApaWebArgs) {
    super(owner, args);

    this.type = lookupWebType(args.reference.format);
  }
}
