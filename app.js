// Adding dependencies
const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require('inquirer');


//  local host connection settings
const connection = mysql.createConnection({
    host:'localhost',
    port:8080,
    user:'root',
    password:'password',
    database:'employeeDB'
  })

  // questions prompt
  connection.connect(async function(err) {
    if (err) throw err;
    console.log("Oh no something went wrong!");
  
    const {start} = await inquirer.prompt({
      type: "list",
      message: "What do you want to do?",
      name: "start",
      choices: [
        {
          name: "Search by artist",
          value: findByArtist,
        },
        {
          name: "See artists with 10 or more songs",
          value: findTopArtists,
        },
        {
          name: "View a range of positions",
          value: findByPosition,
        },
        {
          name: "Search by song title",
          value: findByTitle,
        }
      ]
    });
    start();
  });
