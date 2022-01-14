import Component from '@glimmer/component';
import type {
  PersonArgs,
  ProducedComponent
} from 'ember-cite/components/references/base/component';
import { argsToPerson } from 'ember-cite/utils/person';

interface ProducerEntryArgs extends PersonArgs {
  parent: ProducedComponent;
}

export default class ProducerEntryComponent extends Component<ProducerEntryArgs> {
  constructor(owner: unknown, args: ProducerEntryArgs) {
    super(owner, args);
    args.parent.addProducer(argsToPerson(args));
  }
}
