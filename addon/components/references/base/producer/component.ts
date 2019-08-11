import Component from '@glimmer/component';
import { Owner } from '@glimmer/di';

import {
  ProducedComponent,
  PersonArgs
} from 'ember-cite/components/references/base/component';
import { argsToPerson } from 'ember-cite/utils/person';

interface ReferencesRefEditorArgs extends PersonArgs {
  parent: ProducedComponent;
}

export default class ReferencesReferenceEditorComponent extends Component<
  ReferencesRefEditorArgs
> {
  constructor(owner: Owner, args: ReferencesRefEditorArgs) {
    super(owner, args);
    args.parent.addProducer(argsToPerson(args));
  }
}
