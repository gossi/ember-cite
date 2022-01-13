import Component from '@glimmer/component';

import MediaReference from 'ember-cite/models/references/media';
import { getSeries, lookupMediaType } from 'ember-cite/utils/microformats';

export interface ReferencesFormatterApaMediaArgs {
  reference: MediaReference;
}

export default class ReferencesFormatterApaMediaComponent extends Component<
  ReferencesFormatterApaMediaArgs
> {
  /**
   * itemtype from the given medium
   */
  type: string;

  /**
   * temtype for the series based on the given medium
   */
  seriesType: string;

  constructor(owner: unknown, args: ReferencesFormatterApaMediaArgs) {
    super(owner, args);

    this.type = lookupMediaType(args.reference.medium);
    this.seriesType = lookupMediaType(getSeries(args.reference.medium));
  }
}
