import Component from '@glimmer/component';
import type MediaReference from 'ember-cite/models/references/media';
import { getSeries, lookupMediaType } from 'ember-cite/utils/microformats';

export interface MediaApaFormatterArgs {
  reference: MediaReference;
}

export default class MediaApaFormatterComponent extends Component<MediaApaFormatterArgs> {
  /**
   * itemtype from the given medium
   */
  type: string;

  /**
   * temtype for the series based on the given medium
   */
  seriesType: string;

  constructor(owner: unknown, args: MediaApaFormatterArgs) {
    super(owner, args);

    this.type = lookupMediaType(args.reference.medium);
    this.seriesType = lookupMediaType(getSeries(args.reference.medium));
  }
}
