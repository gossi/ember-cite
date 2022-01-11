
import ReferencesBaseComponent, {
  ProducedComponent
} from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import Episode from 'ember-cite/models/episode';
import Person from 'ember-cite/models/person';
import { ReferenceFields } from 'ember-cite/models/reference';
import MediaReference from 'ember-cite/models/references/media';
import { WebFields } from 'ember-cite/models/references/web';
import { Medium } from 'ember-cite/types/media';

interface ReferencesMediaVideoArgs extends WebFields, ReferenceFields, Episode {
  parent: ReferencesComponent;
}

export default class ReferencesMediaVideoComponent
  extends ReferencesBaseComponent<ReferencesMediaVideoArgs>
  implements ProducedComponent {
  reference: MediaReference;

  constructor(owner: unknown, args: ReferencesMediaVideoArgs) {
    super(owner, args);

    this.reference = new MediaReference(Medium.Video, args);

    args.parent.addReference(this.reference);
  }

  addProducer(producer: Person) {
    this.reference.producers.push(producer);
  }
}
