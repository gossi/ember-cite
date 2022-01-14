import ReferencesBaseComponent from 'ember-cite/components/references/base/component';
import type ReferencesComponent from 'ember-cite/components/references/component';
import type { ReferenceFields } from 'ember-cite/models/reference';
import ArticleReference from 'ember-cite/models/references/article';
import type { ArticleFields } from 'ember-cite/models/references/article';

interface ArticleEntryArgs extends ArticleFields, ReferenceFields {
  parent: ReferencesComponent;
}

export default class ArticleEntryComponent extends ReferencesBaseComponent<ArticleEntryArgs> {
  reference: ArticleReference;

  constructor(owner: unknown, args: ArticleEntryArgs) {
    super(owner, args);

    this.reference = new ArticleReference(args);

    args.parent.addReference(this.reference);
  }
}
