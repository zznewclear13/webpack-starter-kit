# Webpack-Starter-Kit
This is a starter kit for webpack with pug, sass and meta-marked. I made [my personal website](https://zznewclear13.me) using this starter kit.
Also you can find source code for my personal website [here](https://github.com/zznewclear13/zznewclear13.me) in Github.

## System Preparation
To use this project, you will need [NodeJS](https://nodejs.org) installed on your machine.

## Local Installation
Inside the directory, run
```
$ npm install
```
You may encounter a warning like this:
```
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
```
Just run `npm audit fix` to fix them.

## Usage
### 1. Development mode
This will start the environment with file watching, browser synchronisation, auto-rebuild, js compilation, sass compilation, css injection, etc.
```
$ npm run start
```

### 2. Production mode
This will build your website in your `./dist` folder. You may change webpack configuration to get your ideal file structure.
```
$ npm run build
```

## Caution
In `./src/artilces.pug`, changing
```
style='background-image:url(' + require('../images/articles/' +`${image}` + '.jpg') + ')'
```
may result in webpack being unable to recognize image links in markdown files. Because of the same problem, markdown files can only embed jpg files.

For some other mysterious reasons, changing Pug include file or MD file may not refresh the browser.

Sorry for the inconvenience!
