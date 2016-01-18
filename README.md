# sql-uglifier
Minify your SQL scripts.

Install it with:
`npm install -g sql-uglifier`

## Usage
`$ uglify-sql -h`

    Usage: uglify-sql [options]

    Options:

      -h, --help     output usage information
      -V, --version  output the version number
      -n, --noeol    Don't add a newline at the end of the output

    Examples:

      $ uglify-sql myscript.sql
                   # Outputs to the standard output

      $ uglify-sql myscript.sql > uglified-script.sql
                   # Redirects the output to the desired file
