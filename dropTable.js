'use strict';

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database('example.sqlite');
const dropTable = ()=>{
  db.run('DROP TABLE Album');
}
dropTable();
