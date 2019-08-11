# ember-cite

This addon enables you to write an academic/scientific reference list rendered
with microformats.

## Installation

```bash
ember install ember-cite
```

## Usage

This addon will provide you the `<References>` component to generate a reference
listing.

Here is an example:

```hbs
<References class="references" as |l|>
  <l.BlogPost
    @title="Ember 2019: Reduce Complexity"
    @year="2019"
    @url="https://gos.si/blog/ember-2019-reduce-complexity"
  as |r|>
    <r.Author @given="Thomas" @family="Gossmann"/>
  </l.BlogPost>
</References>
```

## Documentation

GOTO [gossi.github.io/ember-cite](https://gossi.github.io/ember-cite)

## Resources

Here are links to APA citation standard:

- [APA @ AIT Library](https://ait.libguides.com/APA)
- [APA Style Guide to Electronic
  References](http://www.misericordia.edu/uploaded/documents/library/Books/APAStyle.pdf?1436800286903)
- [APA Style Guide @ Citefast](https://www.citefast.com/styleguide.php)

## Compatibility

This addon is using hot off the press octane technology, ye'd be warned.

- Canary ?

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
