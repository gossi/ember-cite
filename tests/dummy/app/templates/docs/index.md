# What is ember-cite?

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
