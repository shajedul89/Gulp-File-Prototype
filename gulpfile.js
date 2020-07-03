const gulp = require('gulp');
const sass = require('gulp-sass');
const browSync = require('browser-sync').create();


function style(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browSync.stream());
}


function watch(){
    browSync.init({
        server:{
            baseDir: './'
        }
        
    });
    gulp.watch('./sass/**/*.scss',style);
    gulp.watch('./**/*.html').on('change',browSync.reload);
    gulp.watch('./js/**/*.js').on('change',browSync.reload);
}

exports.style=style;
exports.watch=watch;

