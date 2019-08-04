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
  <l.Web
    @title="Ember 2019: Reduce Complexity"
    @year="2019"
    @format="blog-post"
    @url="https://gos.si/blog/ember-2019-reduce-complexity"
  as |r|>
    <r.Author @given="Thomas" @family="Gossmann"/>
  </l.Web>
</References>
```

With the yielded components you can feed your references which will be sorted
and listed accordingly. At the moment only the APA format is supported, you can
fork, plug in your own formatter and send a PR :-)

### Reference

Available refernce types (so far):

Each of the listed types below can take these arguments:

- `@title` - Title of the reference
- `@year` (number) - Year of the publication
- `@month` (number) - Month of the publication
- `@day` (number) - Day of the publication
- `@url` - URL for an online resource
- `@retrieval` - Date of retrieval (in case the entry changes frequently, e.g. wiki)
- `@doi` - DOI identifier

Sub entries:

`<Author>`

- `@given` - Given name of the person
- `@family` - Family name of the person
- `@middle` - Middle names of the person
- `@name` - A name - mostly used when citing organizations

#### `Book`

Use it to list a book or a chapter of a book.

- `@edition` - the book's edition
- `@chapter` - a book's chapter
- `pages` - pages of the chapter
- `publisher` - publisher of the book
- `address` - place of publication

**Sub entries**

Example structure:

```hbs
<References as |l|>
  <l.Book as |r|>
    <r.Editor />
  </l.Book>
</References>
```

`<Editor>`

- `@given` - Given name of the person
- `@family` - Family name of the person
- `@middle` - Middle names of the person
- `@name` - A name - mostly used when citing organizations

#### `Journal`

List an article from a journal.

- `@journal` - Name of the journal
- `@volume` - The journal's volume
- `@issue` - The journal's issue
- `@pages` - The pages of the article in the journal

#### `Web`

Generic web resource.

:warning: This might change to individual components for each of the formats
respectively.

- `@format` - the actualy format of the resource, e.g. "Blog Post" or "Tweet"

#### `Multimedia`

Generic multimedia resource.

:warning: This might change to individual components for each of the media
respectively.

- `@media` - the actualy medium of the resource, e.g. "DVD", "Video" or
  "Photograph"
- `@series` - Name the series if the medium belongs to one

### Links

Here are links to APA citation standard:

- [APA @ AIT Library](https://ait.libguides.com/APA)
- [APA Style Guide to Electronic References](http://www.misericordia.edu/uploaded/documents/library/Books/APAStyle.pdf?1436800286903)

## Compatibility

This addon is using hot off the press octane technology, ye'd be warned.

- Canary ?

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
