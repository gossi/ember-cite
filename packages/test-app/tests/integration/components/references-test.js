import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';

module('Integration | Component | <References>', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en');

  test('it works with any reference', async function (assert) {
    await render(hbs`
      <References as |l|>
        <l.Book
          @title="Design Patterns : Elements of Reusable Object-Oriented Software"
          @year="1997"
          @publisher="Addison-Wesley Professional Computing"
          as |b|
        >
          <b.Author @given="Erich" @family="Gamma" />
          <b.Author @given="Richard" @family="Helm" />
          <b.Author @given="Ralph" @family="Johnson" />
          <b.Author @given="John" @family="Vlissides" />
        </l.Book>
      </References>
    `);

    assert.dom('[data-test-references] li').exists({ count: 1 });
  });

  test('it works with many reference', async function (assert) {
    await render(hbs`
      <References as |l|>
        <l.BlogPost
          @title="Ember 2019: Reduce Complexity"
          @year="2019"
          @url="https://gos.si/blog/ember-2019-reduce-complexity"
          as |r|
        >
          <r.Author @given="Thomas" @family="Gossmann" />
        </l.BlogPost>

        <l.WebPage
          @title="Builder"
          @url="https://refactoring.guru/design-patterns/builder"
          as |r|
        >
          <r.Author @given="Alexander" @family="Shvets" />
        </l.WebPage>

        <l.Video
          @title="Building Better Components"
          @year="2019"
          @medium="Video File"
          @series="EmberConf 2019"
          @url="https://www.youtube.com/watch?v=Kyd2mQpR_9c"
          as |r|
        >
          <r.Author @given="Dianne" @family="Eramo" />
        </l.Video>
      </References>
    `);

    assert.dom('[data-test-references] li').exists({ count: 3 });
  });
});
