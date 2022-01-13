```hbs template
<References class="references" as |l|>
  <l.Book
    @title="Design Patterns : Elements of Reusable Object-Oriented Software"
    @year="1997"
    @publisher="Addison-Wesley Professional Computing"
    @address=""
    as |b|
  >
    <b.Author @given="Erich" @family="Gamma" />
    <b.Author @given="Richard" @family="Helm" />
    <b.Author @given="Ralph" @family="Johnson" />
    <b.Author @given="John" @family="Vlissides" />
  </l.Book>
</References>
```
