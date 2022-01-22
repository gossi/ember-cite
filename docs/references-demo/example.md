```hbs template
<References class="references" as |l|>
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

  {{!<l.Video
    @title="Building Better Components"
    @year="2019"
    @medium="Video File"
    @series="EmberConf 2019"
    @url="https://www.youtube.com/watch?v=Kyd2mQpR_9c"
    as |r|
  >
    <r.Author @given="Dianne" @family="Eramo" />
  </l.Video>}}
</References>
```
