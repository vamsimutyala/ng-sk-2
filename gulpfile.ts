import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

gulp.task('build.dev',(done : any) => 
    runSequence('clean.dev','scss.dev','build.js.dev' )
);

gulp.task('clean',function(){
    
})