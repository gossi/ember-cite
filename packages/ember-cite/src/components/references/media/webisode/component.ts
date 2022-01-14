import type { ProducedComponent } from 'ember-cite/components/references/base/component';
import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type Episode from 'ember-cite/models/episode';
import type Person from 'ember-cite/models/person';
import type { ReferenceFields } from 'ember-cite/models/reference';
import MediaReference from 'ember-cite/models/references/media';
import type { WebFields } from 'ember-cite/models/references/web';
import { Medium } from 'ember-cite/types/media';

interface WebisodeEntryArgs extends WebFields, ReferenceFields, Episode {
  parent: ReferencesComponent;
}

export default class WebisodeEntryComponent
  extends ReferencesBaseComponent<WebisodeEntryArgs>
  implements ProducedComponent
{
  reference: MediaReference;

  constructor(owner: unknown, args: WebisodeEntryArgs) {
    super(owner, args);

    this.reference = new MediaReference(Medium.Webisode, args);

    args.parent.addReference(this.reference);
  }

  addProducer(producer: Person) {
    this.reference.producers.push(producer);
  }
}
