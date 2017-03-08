
'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('./musichistory.db',(err)=>{console.log("connected")});//db is the database object
// console.log(db)
//
// db.run('INSERT INTO Artist(ArtistName,YearEstablished) VALUES ("D.Imman",1990)')
// db.run('INSERT INTO Album(Title,ReleaseDate,AlbumLength,Label,ArtistId,GenreId) VALUES ("Saattai","08/12/2012",58,"Saattai Movie",(SELECT ArtistId FROM Artist WHERE ArtistName="D.Imman"),(SELECT GenreId FROM Genre WHERE Label="Country"))',(err)=>{console.log(err)});
// db.run('INSERT INTO Song(Title,SongLength,ReleaseDate,GenreId,ArtistId,AlbumId) VALUES ("Pattu onnu",5,"12/21/2013",(SELECT GenreId FROM Genre WHERE Label="Jazz"),(SELECT ArtistId FROM Artist WHERE ArtistName ="D.Imman"),(SELECT AlbumId FROM Album WHERE Title = "Jilla2"))')
//STEP 5
db.all(`SELECT Song.Title,Album.Title,Artist.ArtistName FROM Album
  LEFT JOIN Song ON Song.AlbumId = Album.AlbumId
  LEFT JOIN Artist ON Artist.ArtistId = Album.ArtistId`,(err,allRows)=>{
  console.log(allRows.length)
});

//Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
db.each(`SELECT COUNT(*) FROM Song JOIN Album ON Album.ArtistId = Song.AlbumId`,(err,row)=>{
  console.log("songs exist for each album: ", row)
})

//Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
db.all(`SELECT COUNT(*) FROM Song JOIN Artist ON Artist.ArtistId = Song.ArtistId`,(err,allRows)=>{
  console.log("songs exist for each artist: ",allRows)
})

//Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
db.all(`SELECT COUNT(*) FROM Song JOIN Genre ON Genre.GenreId = Song.GenreId`,(err,allRows)=>{
  console.log("songs exist for each genre: ",allRows)
})

//Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
db.get(`SELECT Title,MAX(AlbumLength) AS Song_Duration FROM Album`,(err,row)=>{
  console.log(row);
})

//Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.
//Modify the previous query to also display the title of the album.
db.get(`SELECT Album.Title AS ALBUM_TITLE,Song.Title,MAX(Song.SongLength) AS Song_Duration FROM Song
  JOIN Album ON Album.ArtistId = Song.ArtistId`, (err,row)=>{
  console.log(row)
})
