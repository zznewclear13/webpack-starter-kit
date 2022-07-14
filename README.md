# Webpack-Starter-Kit
This is a starter kit for webpack with pug, sass and meta-marked. I made [my personal website](https://zznewclear13.me) using this starter kit.
Also you can find source code for my personal website [here](https://github.com/zznewclear13/zznewclear13.me) in Github.

## 2022年7月14日修正

`NodeJS@14.17.0`, `npm@6.14.13`, `cnpm@8.2.0`能正常运行。
1. 在[这里](https://nodejs.org/download/release/v14.17.0/)可以下载到14.17.0的NodeJS版本。
2. 安装NodeJS时，要勾选 Automatically install the necessary tools 这一选项。
3. 进入到webpack-start-kit的文件目录，在vscode的terminal中输入`npm install cnpm@8.2.0 -g --registry=https://registry.npmmirror.com`可以安装8.2.0的cnpm，我们通过cnpm下载到中国的npm镜像（这样不会因为网络的原因而安装失败）。
4. 安装完成后可以看到类似`+ cnpm@8.2.0`的提示，然后输入`cnpm install`（必要的时候要删除目录下的node_modules文件夹）。
5. 最后使用`npm run start`就能在浏览器中打开创建好的网页了。

如果遇到下面的错误，需要用管理员模式运行Windows PowerShell，输入`Set-ExecutionPolicy Bypass`再输入`y`确定更改。
```
cnpm : File C:\Users\zznewclear13\AppData\Roaming\npm\cnpm.ps1 cannot be loaded because running scripts is disabled on this system. For more        
information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
```

此时再在vscode中输入`cnpm install`就不会再报错了，安装完毕之后再在PowerShell中输入`Set-ExecutionPolicy Default`恢复默认的脚本执行策略。

如果`cnpm install`正常的话，应该就能看到类似下面的正确提示。
```
√ All packages installed (908 packages installed from npm registry, used 1m(network 53s), speed 420.31KB/s, json 779(3.81MB), tarball 18.1MB, manifests cache hit 0, etag hit 0 / miss 0)
```

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
