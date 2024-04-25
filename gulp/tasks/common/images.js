import gulp from 'gulp'
import newer from 'gulp-newer'
import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'

import { path } from '../../config/index.js'

export const generateWebp = () =>
  gulp
    .src(path.src.images)
    .pipe(newer(path.dist.images))
    .pipe(webp())
    .pipe(gulp.dest(path.dist.webp))

export const generatePictures = () =>
  gulp
    .src(path.src.images)
    .pipe(newer(path.dist.images))
    .pipe(imagemin())
    .pipe(gulp.dest(path.dist.images))

export const generateImages = gulp.series(generateWebp, generatePictures)
