import type Reference from 'ember-cite/models/reference';

export default interface Formatter {
  sort(references: Reference[]): Reference[];

  fix(references: Reference[]): void;
}
