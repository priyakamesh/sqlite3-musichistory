
'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./musichistory.db',(err)=>{console.log("connected")});//db is the database object
// console.log(db)
//
// db.run('INSERT INTO Artist(ArtistName,YearEstablished) VALUES ("D.Imman",1990)')
// db.run('INSERT INTO Album(Title,ReleaseDate,AlbumLength,Label,ArtistId,GenreId) VALUES ("Saattai","08/12/2012",58,"Saattai Movie",(SELECT ArtistId FROM Artist WHERE ArtistName="D.Imman"),(SELECT GenreId FROM Genre WHERE Label="Country"))',(err)=>{console.log(err)});
// db.run('INSERT INTO Song(Title,SongLength,ReleaseDate,GenreId,ArtistId,AlbumId) VALUES ("Pattu onnu",5,"12/21/2013",(SELECT GenreId FROM Genre WHERE Label="Jazz"),(SELECT ArtistId FROM Artist WHERE ArtistName ="D.Imman"),(SELECT AlbumId FROM Album WHERE Title = "Jilla2"))')
db.all(`SELECT Song.Title,Album.Title,Artist.ArtistName FROM Album
  LEFT JOIN Song ON Song.AlbumId = Album.AlbumId
  LEFT JOIN Artist ON Artist.ArtistId = Album.ArtistId`,(err,allRows)=>{
  console.log({allRows})
});
