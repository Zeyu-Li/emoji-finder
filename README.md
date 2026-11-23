# Emojis

![screenshot](screenshot.png)

A website dedicated to finding the emoji you want

https://zeyu-li.github.io/emojis-finder/build/index.html



## Use

Just enter text in the search bar and the emojis with anything in the description or aliases or tags that contains the search will be found!

Clicking on a row in the table will copy the emoji to the clipboard



## Development

Needs Node 20.19+ or 22.12+ and yarn.

```sh
yarn install
yarn start   # dev server
yarn build   # writes build/, which GitHub Pages serves, so commit it after building
```



# Acknowledgements

Built with React

* emoji json file from https://github.com/github/gemoji/blob/master/db/emoji.json
* [Vite](https://vite.dev)
* icon is an Microsoft emoji (https://emojipedia.org/open-book/)
