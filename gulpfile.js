const gulp = require('gulp');
const postcss = require("postcss");
const sass = require('gulp-sass')(require('sass'));
const gulp_postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require("autoprefixer");
const postcss_sorting = require('postcss-sorting');
const postcss_presetEnv = require('postcss-preset-env');

const $sass_files = 'sass/*.scss'; // 'sass/**/*.scss';
const $tailwind_config = './tailwind.config.js';
const $postcss_sorting_config = './postcss-sorting.json'
const $dest_folder = 'css2';

// Build task
// TODO: check if tailwinds' `purge` is being applied
function build() {
    return gulp.src($sass_files)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp_postcss([
            tailwindcss($tailwind_config),
            autoprefixer()
        ]))
        .pipe(gulp_postcss([
                postcss(tailwindcss()) 
                ,autoprefixer()
                //,postcss_sorting($postcss_sorting_config)
            ]))
        .pipe(gulp_postcss([
            postcss_presetEnv()
        ]))
        .pipe(gulp.dest($dest_folder));
}
gulp.task('build', build);

let order = {
    "order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "at-rules",
      "rules"
  ],
  "properties-order": "alphabetical",
  "unspecified-properties-position": "bottom"
}

//Sort task
gulp.task('sort-css', function() {
    return gulp.src($dest_folder+'/.*.css')
        .pipe(
            gulp_postcss([
                postcss_sorting(order)
            ])
        )
        .pipe(gulp.dest($dest_folder))
});

//Watch task (default)
gulp.task('default', function() {
    gulp.watch($sass_files, gulp.series('build'));//, 'sort-css'));
});