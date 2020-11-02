// Adding dependencies

const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// establishing database connection
const database = mysql.createConnection({
    host:'localhost',
    port:8080,
    user:'root',
    password:'password',
    database:'employeeDB'
  })

  // throws a database connection error 
  database.connect((err) => {
    if (err) throw err;
    main();
  })