const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("My New App");
});

//Simulating Api
app.get('/api/heroes', (req, res) => {
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk','Spiderman']);
});

app.get('/api/heroes/:id', (req,res) => {
  res.send(req.params.id);

}),

app.get('/api/heroes', (req, res) => {
  res.send([{id:1, title:'Superman',publisher:'DC'}, {id:2, title:'Iron Man',publisher:'Marvel'}, {id:3, title:'Batman',publisher:'DC'}, {id:4, title:'Hulk',publisher:'Marvel'}]);
});

//multi params
app.get('/api/heroes/:title/:publisher', (req, res) => {
res.send(req.params);
});

 //query parameter
 app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send([req.params, req.query]);
  });

  app.use(express.json());

//Array
const movies =
[{
  id:1,
  title:'Superman'},
{
  id:2,
  title:'Iron Man'},
{
  id:3,
  title:'Batman'},
{
  id:4,
  title:'Hulk'}]

//Add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});


app.listen(3000, () => console.log('Listening on port 3000'));
