# sql-minify
Minify your SQL scripts.

Install it with:
`npm install -g sql-minify`

## Usage
`$ sql-minify -h`

    Usage: sql-minify [options]

    Options:

      -h, --help     output usage information
      -V, --version  output the version number
      -n, --noeol    Don't add a newline at the end of the output

    Examples:

      $ sql-minify myscript.sql
                   # Outputs to the standard output

      $ sql-minify myscript.sql > minified-script.sql
                   # Redirects the output to the desired file
