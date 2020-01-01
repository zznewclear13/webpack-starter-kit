# zznewclear13.me
This is my personal website (under construction).

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
Note that sometimes changing Pug include file or MD file may not refresh the browser.

### 2. Production mode
This will build your website in your `./dist` folder. You may change webpack configuration to get your ideal file structure.
```
$ npm run build
