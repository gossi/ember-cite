import Component from '@glimmer/component';
import type {
  PersonArgs,
  EditoredComponent
} from 'ember-cite/components/references/base/component';
import { argsToPerson } from 'ember-cite/utils/person';

interface EditorEntryArgs extends PersonArgs {
  parent: EditoredComponent;
}

export default class EditorEntryComponent extends Component<EditorEntryArgs> {
  constructor(owner: unknown, args: EditorEntryArgs) {
    super(owner, args);
    args.parent.addEditor(argsToPerson(args));
  }
}
