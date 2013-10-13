require([
    "dojo/parser",
    "dojo/query",
    "dojo/domReady!"
], function (
    parser,
    query
) {
    // by default parse() parses children of <body>
    // here we want <body> to be included so we start at <html>
    parser.parse(query('html')[0]);

    window.prettyPrint && prettyPrint();
});