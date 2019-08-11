import { Owner } from '@glimmer/di';

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

interface ReferencesMediaWebisodeArgs
  extends WebFields,
    ReferenceFields,
    Episode {
  parent: ReferencesComponent;
}

export default class ReferencesMediaWebisodeComponent
  extends ReferencesBaseComponent<ReferencesMediaWebisodeArgs>
  implements ProducedComponent {
  reference: MediaReference;

  constructor(owner: Owner, args: ReferencesMediaWebisodeArgs) {
    super(owner, args);

    this.reference = new MediaReference(Medium.Webisode, args);

    args.parent.addReference(this.reference);
  }

  addProducer(producer: Person) {
    this.reference.producers.push(producer);
  }
}
