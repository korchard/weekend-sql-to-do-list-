const express = require('express'); // require in express
const todoRouter = express.Router(); 
const pool = require('../modules/pool'); // require in database/pg
const moment = require('moment'); // require in moment to time stamp when task is completed

// DB CONNECTION

// GET --- retrieves information from the database and sends to client side via result
todoRouter.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "tasks" ORDER BY "task";`; 
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in getting tasks...', error);
            res.sendStatus(500);
        });
})

// POST --- receives an object from the client side (input box) and inserts it into the database
todoRouter.post('/', (req, res) => {
    let newTask = req.body; // object received
    let sqlText = `INSERT INTO "tasks" ("task")
                    VALUES ($1);`
    pool.query(sqlText, [newTask.task]) // includes the object that replaces the $1 here
        .then((result) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log('Error in posting tasks...', error);
            res.sendStatus(500);
        })
})

// PUT --- route changes the status from complete to incomplete and back if button is pressed on the client side
todoRouter.put('/:id', (req, res) => {
    let task = req.body.taskStatus; // object with information to update from client side to database
    let id = req.params.id; // params are the instructions of what to do with the data 
    let sqlText = ``;
    let time = moment().format('lll'); // here is how we create the time stamp and formatting for the time
    let remove = ``; // used to remove the time stamp if the task is marked back to incomplete

    console.log('in router', task, id);
    if (task === 'Completed') { // conditional toggling status, includes addition or subtration of time stamp
        sqlText = `UPDATE "tasks" SET "status"='Incomplete', "time_completed"=$1 WHERE id=$2;`;
        pool.query(sqlText, [remove, id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error when changing status...', error)
            res.sendStatus(500);
        }) 
    } else {
        sqlText = `UPDATE "tasks" SET "status"='Completed', "time_completed"=$1 WHERE id=$2;`;
        pool.query(sqlText, [time, id])
        .then((result) => {
            res.sendStatus(200); 
        }).catch((error) => {
            console.log('Error when changing status...', error)
            res.sendStatus(500);
        }) 
    }
    console.log(`Updating task ${id} with`, task);
})

// DELETE --- deletes specific information/based on id in the database when a button is clicked on client side
todoRouter.delete('/:taskId', (req, res) => {
    let id = req.params.taskId; // identifys which item to delete
    let sqlText = `DELETE FROM "tasks" WHERE id=$1;`
    pool.query(sqlText, [id]) 
        .then((result) => { 
            res.sendStatus(200); 
        })
        .catch( (error) => {
            console.log('Error from db...', error);
            res.sendStatus(500);
        })
})

module.exports = todoRouter;