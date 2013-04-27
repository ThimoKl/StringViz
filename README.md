## Welcome to StringViz

StringViz is a little tool to visualize positions of a string.

StringViz will save you some time when parsing data, scraping a website or analyzing xml.

## Demo

This code creates the following output.
`````javascript
StringViz.visualize(
    '<img src="/path/to/image.png" width="40px" />',
    [
        { 'position': 10, 'text': 'Start'},
        { 'position': 28, 'text': 'End'}
    ]
);

StringViz.visualize(
    'The product "NameABC" is $99.99',
    [
        { 'position': 13, 'text': 'p1'},
        { 'position': 20, 'text': 'p2'},
        { 'position': 26, 'text': 'p3'},
        { 'position': 31, 'text': 'p4'}
    ]
);
`````
![Output](example.jpg)

## Download

Just download all three files.
jQuery is required.

## Contributing 

Anyone and everyone is welcome to contribute.

## Author

Twitter: [@ThimoKl](https://twitter.com/ThimoKl)
