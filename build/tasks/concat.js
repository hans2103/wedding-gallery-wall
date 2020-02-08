/* eslint-disable */

'use strict';

const concat = require('../modules/concat');

const src = process.env.npm_package_config_src + '/scripts';
const dest = process.env.npm_package_config_src + '/js';

module.exports = options => {

    const file = options.file;

    if (file === 'main.js') {
        concat({
            src: [
                'node_modules/apollo.js/dist/apollo.min.js',
                'node_modules/vanilla-js-responsive-menu/vanilla.js.responsive.menu.js',
                `${src}/main.js`
            ],
            dest: `${dest}/scripts.concat.js`
        });
    }

};

/* eslint-enable */
