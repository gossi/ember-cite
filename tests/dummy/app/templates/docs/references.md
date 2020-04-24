# References

The `<References>` component will yield components you can use as semantically
data entry. The `<Referecnce>` component will take care of sorting and pass it
to the respective formatter to display the listing accordingly based on your
chosen citation standard.

## Arguments

- `@style` (string) - Select the citation standard. At the moment only `apa` is
  supported (and by the the default)

## Yields

- `listing` (hash)
  - `Book` (<LinkTo @route="docs.book">Book</LinkTo>)
  - `Article` (<LinkTo @route="docs.article">Article</LinkTo>)
  - `BlogPost` (<LinkTo @route="docs.blog-post">Blog Post</LinkTo>)
  - `Video` (<LinkTo @route="docs.video">Video</LinkTo>)
  - `TvEpisode` (<LinkTo @route="docs.tv-episode">TV Episode</LinkTo>)
  - `Webisode` (<LinkTo @route="docs.webisode">Webisode</LinkTo>)
