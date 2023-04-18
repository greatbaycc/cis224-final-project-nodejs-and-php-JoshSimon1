const express = require('express');
const _ = require("underscore");
const app = express();
const header = '<style>body { background: lightblue; }</style>';

app.get('/', (req, res) => {
    let message = header + '<h1>Hello Express app!</h1>';
    message += '<p><a href="/blastoff">Blast off</a></p>';
    message += '<p><a href="/diceroll">Roll a die</a></p>';
    //Create links to two more pages you've created here
    res.send(message);
});

/* add the proper value for the blastoff page URL inside the single quotes on the next line */
app.get('', (req, res) => {
    let message = header +'<h1>Count down begins now ...</h1>';

    //Implement a for-loop to do a countdown from a starting number of your choice
    //Within the loop, decrement

    message += '<h2>Blast off!!!!</h2>';
    message += '<p><a href="/">Home</a></p>';
    res.send(message);
});

/* add the proper value for the diceroll page URL inside the single quotes on the next line */
app.get('', (req, res) => {
    let message = header + '<h1>Dice Roll results:</h1>';

    //Implement a for-loop to simulate rolling a single 6-sided die.

    message += '<p><a href="/">Home</a></p>';
    res.send(message);
});


//Now create two pages of your own design and make sure the links to these pages
//are added to the home page (the page with '/' as its URL


app.listen(3000, () => {
    console.log('server started');
});
