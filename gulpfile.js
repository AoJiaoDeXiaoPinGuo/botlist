var gulp=require("gulp");
var concat=require('gulp-concat');
var jade=require('gulp-jade');

gulp.task('default',['watch'],function(){
	gulp.src('./view/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('desk/'))
})


gulp.task('watch',function(){
	gulp.watch('./view/*.jade',['default'])
})