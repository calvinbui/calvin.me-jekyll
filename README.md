# calvin.me

Source files for my website [https://calvin.me](https://calvin.me).

Makes use of GitHub pages and Jekyll.

Runs over a customised [Jekyll Now theme](https://github.com/barryclark/jekyll-now/)

## Running

Will require Ruby and Bundler installed.

Run `bundler install` to get the latest packages.

To execute, run `bundle exec jekyll serve [--incremental] [--drafts] [--host 0.0.0.0]`. Otherwise run the scripts in the `scripts` folder.

## Generate Critical CSS

Option 1: https://www.sitelocity.com/critical-path-css-generator

Option 2: Install gulp and critical:

```npm install```

Run the gulp script:

```gulp critical```
