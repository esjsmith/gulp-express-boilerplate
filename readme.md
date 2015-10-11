## Gulp Setup
### gulp-clean
  - Uses the npm `del` package to remove files
  - Will be called by the `gulp-inject` task to empty out the 
    target file before writing the update.
  - `clean:index`: deletes the `index.jade` file, whose location 
    is defined by the `config.jadeIndex.dest` path in the gulp
    config file.
  - `clean:styles`: deletes the compiled `css` files from the 
    directory established by the gulp config file.

### gulp-inject
  - The source of the index.jade will be in the /src/dev-index.jade file. Once wiredep and gulp-inject do their jobs and list the dependencies, the file will be destined to the `views` folder, which is where the express server will look for it.

### wiredep
See `gulp-inject`.
