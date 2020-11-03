// Adding dependencies
const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require('inquirer');


//  local host connection settings
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password:'password',
    database:'employeeDB'
  })


  // call on the function that displays main menu
start()
function start() {
  console.log("Welcome to the Employee Directory!");
  mainMenu();
}

  // questions prompt
  connection.connect(async function(err) {
    if (err) throw err;
    console.log("Oh no something went wrong!");

  // prompts user between 7 items
    const mainMenu = await inquirer.prompt([
      {
      type: "list",
      message: "What do you want to do?",
      name: "menuChoice",
      choices: ["View Employees", "View Departments", "View Employee Role", "Add An Employee", "Add Department", "Add Employee Role", "Update Employee Role"
    ]
  }
]).then(function (userChoice) {
  switch (userChoice.menuChoice){

  }
})

    });
    mainMenu();
  });
