---
category: components
order: 1
---

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
  - `Book` (<DocfyLink @to="/docs/book">Book</DocfyLink>)
  - `Article` (<DocfyLink @to="/docs/article">Article</DocfyLink>)
  - `BlogPost` (<DocfyLink @to="/docs/blog-post">Blog Post</DocfyLink>)
  - `Video` (<DocfyLink @to="/docs/video">Video</DocfyLink>)
  - `TvEpisode` (<DocfyLink @to="/docs/tv-episode">TV Episode</DocfyLink>)
  - `Webisode` (<DocfyLink @to="/docs/webisode">Webisode</DocfyLink>)
