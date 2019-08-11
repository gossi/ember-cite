import Component from '@glimmer/component';

import Reference from 'ember-cite/models/reference';

export interface ReferencesFormatterApaArgs {
  reference: Reference;
}

export default class ReferencesFormatterApaComponent extends Component<
  ReferencesFormatterApaArgs
> {}
