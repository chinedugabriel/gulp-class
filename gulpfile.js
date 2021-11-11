const { src, dest, watch } = require('gulp');
const minifyCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

const compileCSS = () => {
    return src('./assets/src/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./assets/dist'))
    .pipe(browserSync.stream());
}

const devWatch = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    watch('./assets/src/**/*.scss', compileCSS);
    watch('./index.html').on('change', browserSync.reload);
}

exports.sass = compileCSS;
exports.watch = devWatch;