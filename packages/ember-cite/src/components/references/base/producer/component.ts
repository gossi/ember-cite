import Component from '@glimmer/component';

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
  constructor(owner: unknown, args: ReferencesRefEditorArgs) {
    super(owner, args);
    args.parent.addProducer(argsToPerson(args));
  }
}
