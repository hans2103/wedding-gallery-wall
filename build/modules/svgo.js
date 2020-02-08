/* eslint-disable */

'use strict';

/**
 * optimizing SVG vector graphics files
 */
const fs = require('fs');
const SVGO = require('svgo');

let svgo = new SVGO({
    plugins: [{
        cleanupAttrs: true
    }, {
        removeDoctype: true
    }, {
        removeXMLProcInst: true
    }, {
        removeComments: true
    }, {
        removeMetadata: true
    }, {
        removeTitle: true
    }, {
        removeDesc: true
    }, {
        removeUselessDefs: true
    }, {
        removeEditorsNSData: true
    }, {
        removeEmptyAttrs: true
    }, {
        removeHiddenElems: true
    }, {
        removeEmptyText: true
    }, {
        removeEmptyContainers: true
    }, {
        removeViewBox: false
    }, {
        cleanupEnableBackground: true
    }, {
        convertStyleToAttrs: true
    }, {
        convertColors: true
    }, {
        convertPathData: true
    }, {
        convertTransform: true
    }, {
        removeUnknownsAndDefaults: true
    }, {
        removeNonInheritableGroupAttrs: true
    }, {
        removeUselessStrokeAndFill: true
    }, {
        removeUnusedNS: true
    }, {
        cleanupIDs: true
    }, {
        cleanupNumericValues: true
    }, {
        moveElemsAttrsToGroup: true
    }, {
        moveGroupAttrsToElems: true
    }, {
        collapseGroups: true
    }, {
        removeRasterImages: false
    }, {
        mergePaths: true
    }, {
        convertShapeToPath: true
    }, {
        sortAttrs: true
    }, {
        removeDimensions: true
    }, {
        removeAttrs: {attrs: '(stroke|fill|fill-rule|stroke-linejoin|stroke-miterlimit|clip-rule)'}
    }]
});

module.exports = options => {

    const src = options.src;
    const file = options.file;
    const dest = options.dest;
    const type = options.type || 'dir';

    if (type === 'file') {
        if (fs.statSync(src + '/' + file)
            .isFile()) {
            fs.readFile(src + '/' + file, 'utf8', (err, data) => {

                if (err) {
                    throw err;
                }

                svgo.optimize(data, {path: dest})
                    .then(result => {
                        fs.writeFileSync(dest + '/' + file, result.data, () => true);
                    });

                console.log(' Optimized ' + file + ' to ' + dest + '/' + file);
            });
        }
    }

    if (type === 'dir') {
        fs.readdirSync(src)
            .forEach(file => {
                if (fs.statSync(src + '/' + file)
                    .isFile()) {
                    fs.readFile(src + '/' + file, 'utf8', (err, data) => {

                        if (err) {
                            throw err;
                        }

                        svgo.optimize(data, {path: dest})
                            .then(result => {
                                fs.writeFileSync(dest + '/' + file, result.data, () => true);
                            });

                        console.log(' Optimized ' + file + ' to ' + dest + '/' + file);
                    });
                }
            });
    }
};

/* eslint-enable */
