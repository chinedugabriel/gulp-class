const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

const compileCSS = () => {
    return src('./assets/src/**/*.scss')
    .pipe(sass())
    .pipe(dest('./assets/dist'));
}

exports.sass = compileCSS;