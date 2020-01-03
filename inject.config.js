const path = require('path');
const metamarked = require('meta-marked');
const fs = require('fs');

const PAGE_MARKDOWN_PATH = path.join(__dirname, './posts');
const PAGE_OUTPUT_PATH = path.join(__dirname, './dist/posts');


const loadMarkdownPage = (mdFilename) => {
    const mdPath = path.join(
      PAGE_MARKDOWN_PATH, mdFilename
    );
    const mdBuffer = fs.readFileSync(mdPath);
    return mdBuffer.toString();
}

const parseMarkdown = (mdString = '') => {
    return metamarked(mdString.toString());
}
  
let routes = fs.readdirSync(PAGE_MARKDOWN_PATH)

module.exports = [
    ...routes.map((route) => {
        let mdString = loadMarkdownPage(route);
        let md = parseMarkdown(mdString);
        let MDtitle = md.meta.title
        let MDdisc = md.meta.disc
        let MDpath = md.meta.path

        return {
            title: `${MDtitle}`,
            disc: `${MDdisc}`,
            filename: path.join(PAGE_OUTPUT_PATH, `${MDpath}.html`),
            template: './src/postsTemplate.pug',
            inject: true,
            bodyHTML: md.html
        }
    })
  
];
