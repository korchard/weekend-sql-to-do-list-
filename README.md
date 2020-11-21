# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


TODO:
-HTML
[x] input a task
[x] submit button
[x] table to display list and personal info
[x] list on DOM with checkboxes 
    [x] complete
    [x] delete

-CLIENT
[x] click handler for submit button
[x] GET
    [x] append the list to the DOM
    [x] needs to be called in POST, UPDATE, AND DELETE, as well as onReady
[x] POST
    [x] Store info from created task/submit button handler into database
[x] UPDATE
    [x] when a task is completed, it needs to be visually displayed differently - using css
    [x] needs to update the database when task is complete
[x] DELETE
    [x] needs to remove task from database AND front end (can do the latter by calling the GET function within DELETE request)

-SERVER
[x] install express, jquery, pg
[x] pool.js - create routes
[x] router.js - create routes
[x] server.js - create routes

-SQL
[x] table will include:
    [x] task
    [x] whether or not it is complete
    [x] database name = `weekend-to-do-app`

-STRETCHES
   [x]  Add Bootstrap to the front end and style it up!
      [x]  Buttons -- make the creation buttons and completion buttons green and the delete red.
      [x]  Inputs -- make your text inputs styled in the bootstrap way
      [x]  Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

[x] are you sure button with sweet alert
[]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
[x]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
    [x] use express express with train stuff for this one

-------------------------------------------------


![MIT LICENSE](https://img.shields.io/github/license/korchard/weekend-sql-to-do-list-.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/korchard/weekend-sql-to-do-list-.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/korchard/weekend-sql-to-do-list-.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/korchard/weekend-sql-to-do-list-.svg?style=social)

# PROJECT NAME

WEEKEND SQL TO DO LIST

## Description

_Duration: 7 hours

This is a 'TO DO' application that allows the user to create a task, which is added and stored in a database. There are options to check the task as completed, to uncheck it, and delete it from the list. 

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [express] - install in terminal
- [postgres] - install in terminal
- [moment] - install in terminal

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `your database name`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` - this will install `express`, `node.js`, `jQuery`, `moment` and `pg`.
4. Input in the package.json `"start": "node server/server.js"` - under scripts.
5. Run `npm start` in your terminal.
6. Open localhost:5000 in your browswer to use the application.

## Usage
How does someone use this application? Tell a user story here.

1. Input your todo tasks into the input box - they will display on the DOM.
2. When a task is completed, check the marked box on the far left. - There will be a display change to recognize the task has been checked - and the date and time that you have completed the task will display.
3. If you accidentally check a task as completed, but have not completed it, click the check marked box again and it will return to an incomplete status.
4. When you want to remove a task from the list, there is a delete button on the fart right to press and a safety catch if you accidentally press it to ensure you mean to remove it.

## Built With

List technologies and frameworks here
- jQuery
- javaScript
- HTML/CSS
- Bootstrap
- Sweetalert
- moment
- node
- express
- postgres

## License
![MIT LICENSE](https://img.shields.io/github/license/korchard/weekend-sql-to-do-list-.svg?style=flat-square)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please reach out to me on linkedIn [https://www.linkedin.com/in/kimberly-orchard-she-her/]

