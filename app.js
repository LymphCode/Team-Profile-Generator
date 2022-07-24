const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [{
    name: 'name',
    message: 'Enter name of employee'
},
{
    name: 'id',
    message: 'What is employee id?'
},
{
    name: 'email',
    message: 'What is your email?'
},
{
    type: 'list',
    name: 'role',
    message: `Enter employee's role`,
    choices: [
        'Engineer',
        'Intern',
        'Manager'
    ]
},
{

}]

const questionsEngineer = [{
    name: 'github',
    message: 'What is your github?'
}]

const questionsManager = [{
    name: 'officeNum',
    message: 'What is your office number?'
}]

const questionsIntern = [{
    name: 'school',
    message: 'What is your school?'
}]


function askAndGetQuestionResponses() {
    var userData = [];

    inquirer
        .prompt(questions)
        .then((answers) => {
            userData += answers;
            if (userData[0].role == 'Engineer') {
                console.log('hello');
                inquirer
                    .prompt(questionsEngineer)
                    .then((answer) => {
                        userData += answer;
                    })
            } else if (userData[0].role == 'Manager') {
                inquirer
                    .prompt(questionsManager)
                    .then((answer) => {
                        userData += answer;
                    })
            } else if (userData[0].role == 'Intern') {
                inquirer
                    .prompt(questionsIntern)
                    .then((answer) => {
                        userData += answer;
                    })
            }
        })

    return userData;
}


askAndGetQuestionResponses();