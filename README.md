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

[] are you sure button with sweet alert
[]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
[]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.
    [] use express express with train stuff for this one


