import { Formatter } from 'ember-cite/components/references/formatter';
import Person from 'ember-cite/models/person';
import Reference from 'ember-cite/models/reference';

export default class ApaFormatter implements Formatter {
  sort(references: Reference[]): Reference[] {
    return references.sort((a, b) => {
      let amountCmp;

      if (a.authors.length === b.authors.length) {
        amountCmp = 0;
      } else {
        amountCmp = a.authors.length > b.authors.length ? 1 : -1;
      }

      const getName = (person: Person) => {
        if (person.name) {
          return person.name;
        }

        return person.family;
      };

      const getSecondName = (person: Person) => {
        if (person.name) {
          return person.name;
        }

        return person.given;
      };

      let cmp = 0;
      let i = 0;
      do {
        const nameA = getName(a.authors[i]);
        const nameB = getName(b.authors[i]);
        cmp = nameA.localeCompare(nameB);

        if (cmp === 0) {
          const secondNameA = getSecondName(a.authors[i]);
          const secondNameB = getSecondName(b.authors[i]);
          cmp = secondNameA.localeCompare(secondNameB);

          if (cmp === 0) {
            cmp = amountCmp;
          }
        }
        i++;
      } while (cmp === 0 && i < a.authors.length && i < b.authors.length);
      return cmp;
    });
  }

  fix(references: Reference[]) {
    this.fixYear(references);
  }

  private fixYear(entries: Reference[]) {
    const store: { [rawId: string]: Reference[] } = {};
    for (const entry of entries) {
      const id = entry.compileRawId();
      if (!store[id]) {
        store[id] = [];
      }

      store[id].push(entry);
    }

    for (const references of Object.values(store)) {
      if (references.length > 1) {
        for (const reference of references) {
          const i = references.indexOf(reference);
          reference.yearSuffix = String.fromCharCode(97 + i);
          reference.updateId();
        }
      }
    }
  }
}
