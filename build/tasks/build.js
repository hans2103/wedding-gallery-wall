/* eslint-disable */

'use strict';

const copy = require('../modules/copy');
const symlink = require('../modules/symlink');
const clean = require('../tasks/clean');
const mkdirp = require('../tasks/mkdirp');
const sass = require('../tasks/sass');
const postcss = require('../tasks/postcss');
const concat = require('../tasks/concat');
const babel = require('../tasks/babel');
const modernizr = require('../tasks/modernizr');
const svgstore = require('../tasks/svgstore');
const svgo = require('../tasks/svgo');

const currentPath = process.cwd();
const dest = process.env.npm_package_config_dist;

// clean and create
clean();
mkdirp();

// css
sass({file: 'style.scss'});
sass({file: 'dev.scss'});
sass({file: 'font.scss'});
setTimeout(() => {
    postcss({file: 'style.css'});
    postcss({file: 'dev.css'});
    postcss({file: 'font.css'});
}, 2000);

// js
concat({file: 'main.js'});
setTimeout(() => {
    babel({file: 'scripts.concat.js'});
}, 2000);

modernizr();

// icons
svgstore();
svgo();

/* eslint-enable */
