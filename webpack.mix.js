const mix = require('laravel-mix');
const path = require('path');
const fs = require('fs');

mix.js('./JsUrlHelper.js', 'dist/JsUrlHelper.js')
.setPublicPath('dist')
.webpackConfig({
    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'src')]
    },
    output: {
        library: 'urlHelper',
        libraryTarget: 'window',
    },
    stats: 'errors-only',
}).disableNotifications();
