
import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import WebReference, { WebFields } from 'ember-cite/models/references/web';
import { WebFormat } from 'ember-cite/types/web';

export interface ReferencesWebArgs extends WebFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesWebComponent extends ReferencesBaseComponent<
  ReferencesWebArgs
> {
  reference: WebReference;

  constructor(owner: unknown, args: ReferencesWebArgs) {
    super(owner, args);

    this.reference = new WebReference(WebFormat.WebPage, args);

    args.parent.addReference(this.reference);
  }
}
