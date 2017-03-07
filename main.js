
'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./musichistory.db',(err)=>{console.log("connected")});//db is the database object
// console.log(db)
//
// db.run('INSERT INTO Artist(ArtistName,YearEstablished) VALUES ("D.Imman",1990)')
db.run('INSERT INTO Album(Title,ReleaseDate,AlbumLength,Label,ArtistId,GenreId) VALUES ("Jilla2","12/21/2013",34,"Vijay Movie",(SELECT ArtistId FROM Artist WHERE ArtistName="D.Imman"),(SELECT GenreId FROM Genre WHERE Label="Jazz"))',(err)=>{console.log(err)});
