
const gulp=require('gulp')
const server=require('gulp-server-livereload')

gulp.task('serve',(cb)=>{
    gulp.src('www')
        .pipe(server({
          livereload:true,
          open:true
        }))
  })