var express = require('express');
var app = express();
var excel = require('xlsx');

const const_data = {
  games: {
    iidx: {
      23:{
        current: true
      },
      24:{
        current: true
      }
    },
    popn: {},
    ddr: {
      2014:{
        current: true
      },
      ace:{
      }
    }
  }
}

function parseExcel(game, version, build, min, max, difficulty){
  return null;
  //get excel data;
}

app.get('/games', function(req, res, next){
  var games = [];
  var count = 0;

  for(game in const_data.games){
    games.push(game);
    count++;
  }

  var return_value = {
    games: games,
    count: count
  }

  res.status(200);
  res.json(return_value);
})

app.get('/versions/:game', function(req, res, next){
  var versions = [];
  var count = 0;
  var game = req.params.game;

  for(version in const_data.games[game]){
    versions.push(version);
    count++;
  }

  var return_value = {
    versions: versions,
    count: count
  }

  res.status(200);
  res.json(return_value);
})

app.get('/builds/:game/:version', function(req, res, next){
  var builds = [];
  var count = 0;
  var game = req.params.game;
  var version = req.params.version;

  for(build in const_data.games[game][version]){
    builds.push(build);
    count++;
  }

  var return_value = {
    builds: builds,
    count: count
  }

  res.status(200);
  res.json(return_value);
})

app.get('/random_song/:game/:version/:build', function(req, res, next){
  var game = req.params.game;
  var version = req.params.version;
  var build = req.params.build;

  var songs = parseExcel(game, vversion, build, 0, 0, "all");

  res.status(403);
  //res.json(songs);
})

app.get('/random_song/:game/:version/:build/:difficulty', function(req, res, next){
  var game = req.params.game;
  var version = req.params.version;
  var build = req.params.build;
  var difficulty = req.params.difficulty;

  res.status(403);
})

app.get('/random_song/:game/:version/:build/:min_level/:max_level', function(req, res, next){
  var game = req.params.game;
  var version = req.params.version;
  var build = req.params.build;
  var min_level = req.params.min_level;
  var max_level = req.params.max_level;

  res.status(403);
})

const port = process.env.PORT || 3001;

app.listen(port);
