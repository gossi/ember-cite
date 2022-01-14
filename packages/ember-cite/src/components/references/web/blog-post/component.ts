import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type { ReferenceFields } from 'ember-cite/models/reference';
import type { WebFields } from 'ember-cite/models/references/web';
import WebReference from 'ember-cite/models/references/web';
import { WebFormat } from 'ember-cite/types/web';

interface BlogPostEntryArgs extends WebFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class BlogPostEntryComponent extends ReferencesBaseComponent<BlogPostEntryArgs> {
  reference: WebReference;

  constructor(owner: unknown, args: BlogPostEntryArgs) {
    super(owner, args);

    this.reference = new WebReference(WebFormat.BlogPost, args);

    args.parent.addReference(this.reference);
  }
}
