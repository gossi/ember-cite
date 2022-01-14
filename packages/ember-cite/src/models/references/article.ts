import Reference from 'ember-cite/models/reference';
import { ReferenceType } from 'ember-cite/types/reference';

export interface ArticleFields {
  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}

export default class ArticleReference
  extends Reference
  implements ArticleFields
{
  type = ReferenceType.Journal;

  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
}
