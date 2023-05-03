const express = require('express');
const _ = require("underscore");
const app = express();
const header = '<style>body { background: lightblue; }</style>';

app.get('/', (req, res) => {
  message = header + '<h1>Hello Express app!</h1>';
  message += '<p><a href="/blastoff">Blast off</a></p>';
  message += '<p><a href="/diceroll">Roll a die</a></p>';
  message += '<p><a href="/marvel">Marvel Movie Tier List</a></p>';
  message += '<p><a href="/starwars">Star Wars Movie Tier List</a></p>';
  res.send(message);
});

app.get("/blastoff", (req, res) => {
  let message = header +'<h1>Count down begins now ...</h1>';

  for (let i = 10; i >= 0; i--) {
    message += '<p>' + i + ' ...</p>';
  }
  
  message += '<h2>Blast off!!!!</h2>';
  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.get('/diceroll', (req, res) => {
  let message = header + '<h1>Dice Roll results:</h1>';
  
  message += '<p>Dice roll goes here!</p>'

  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

//Create two pages of your own design and make sure the links to these pages work for the
//root (/) URL
app.get('/marvel', (req, res) => {
  let message = header + '<h1>My Marvel Movie Tier List:</h1>';
  
  message += '<p>S Tier: Avengers: Infinity War, Thor Ragnarok, Captain America Civil War, Captain America The Winter Soldier, Iron Man 1, Doctor Strange</p>'
  message += '<p>A Tier: Spider-Man: No Way Home, Avengers: Endgame, Black Panther, Ant-Man, The Avengers, Gaurdians of the Galaxy 1 and 2, Iron man 2</p>'
  message += '<p>B Tier: Thor Love and Thunder, Doctor Strange and the Mutliverse of Madness, Captain America: The First Avenger, Iron 3, Spider-Man: Homecoming</p>'
  message += '<p>C Tier: Thor 1, Thor the Dark World, Ant-Man and the Wap, Avengers: Age of Ultron, Spider-Man: Far From Home. Captain Marvel</p>'
  
  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.get('/starwars', (req, res) => {
  let message = header + '<h1>My Star Wars Movie Tier List:</h1>';
  
  message += '<p>S Tier: Revenge of the Sith, Empire Strikes Back</p>'
  message += '<p>A Tier: Force Awakens, Return of the Jedi</p>'
  message += '<p>B Tier: Rogue One, A New Hope</p>'
  message += '<p>C Tier: The Phantom Menace, Solo</p>'
  message += '<p>D Tier: Rise of Skywalker, Attack of the Clones</p>'
  message += '<p>F Tier: The last Jedi</p>'

  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});


app.listen(3000, () => {
  console.log('server started');
});


