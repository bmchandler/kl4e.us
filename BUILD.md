I was trying to find Python equivalent, but it looks like nvm + npm is still safest bet for being maintained.
I couldn't find a Pug CLI and Sass CLI I felt ok with on Python.

## Build Software
1) Install NVM (Node.js Version Managar) - This doesn't need to be installed globally and has the 2 CLIs we care about.
   https://github.com/nvm-sh/nvm
   `cd Downloads`
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`
   Optional (Already adds to end of .bashrc, but can do after above to go ahead and get it working in current terminal.)
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
   `nvm install --lts`
   `nvm use --lts`
   `node -v` can be used to doublecheck the installed Node.js version
2) Install the Pug CLI for transpiling Pug code to HTML
   https://github.com/pugjs/pug-cli
   `npm install -g pug-cli` (Install with -g since command line tool.)
   `pug -V` can be used to check installed and the CLI version
3) Install the Sass CLI for transpiling Sass code to CSS
   https://sass-lang.com/dart-sass
   `npm install -g sass`
   `sass --version` can be used to check installed and the CLI version


## Build (Manual)
`pug src/pug/ --out static/`
For devel (uncompressed w/sourcemap for debugging) `sass src/sass:static/css`
For prod (compressed w/out sourcemap) `sass src/sass:static/css -s compressed --no-source-map`
