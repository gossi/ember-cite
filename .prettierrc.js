'use strict';

module.exports = {
  singleQuote: true,
  overrides: [
    {
      files: ['*.md', '*.hbs'],
      options: {
        singleQuote: false
      }
    }
  ]
};
