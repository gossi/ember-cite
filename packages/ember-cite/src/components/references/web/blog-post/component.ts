
import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import ReferencesComponent from 'ember-cite/components/references/component';
import { ReferenceFields } from 'ember-cite/models/reference';
import WebReference, { WebFields } from 'ember-cite/models/references/web';
import { WebFormat } from 'ember-cite/types/web';

interface ReferencesWebBlogPostArgs extends WebFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ReferencesWebBlogPostComponent extends ReferencesBaseComponent<
  ReferencesWebBlogPostArgs
> {
  reference: WebReference;

  constructor(owner: unknown, args: ReferencesWebBlogPostArgs) {
    super(owner, args);

    this.reference = new WebReference(WebFormat.BlogPost, args);

    args.parent.addReference(this.reference);
  }
}
