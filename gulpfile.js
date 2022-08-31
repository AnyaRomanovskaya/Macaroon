'use strict';

const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

// задача gulp предств из себя функцию,
// кот сод-ит в себе код по преобр-ю файлов
exports.less = function () {
    return src('./styles/styles.less') //операция вызывает ф-ю src(source) - там нах-ся исходники файлов, с кот мы будем раб-ть
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/styles'));
}

exports.watch = function () {
    watch('./styles/*.less', series('less'));
};