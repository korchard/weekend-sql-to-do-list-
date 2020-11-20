const express = require('express');
const todoRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION

// GET
todoRouter.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "tasks" ORDER BY "status";`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in getting tasks...', error);
            res.sendStatus(500);
        });
})

// POST
todoRouter.post('/', (req, res) => {
    let newTask = req.body;
    let sqlText = `INSERT INTO "tasks" ("task")
                    VALUES ($1);`
    pool.query(sqlText, [newTask.task])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log('Error in posting tasks...', error);
            res.sendStatus(500);
        })
})

// PUT
/*todoRouter.put('/:id', (req, res) => {
    let task = req.body;
    let id = req.params.id;
    let sqlText = `UPDATE "tasks" SET "status"='Complete' WHERE id=$1;`;
    pool.query(sqlText, [id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error when changing status...', error)
        res.sendStatus(500);
    }) 
    console.log(`Updating task ${id} with`, task);
})*/

// DELETE
/*todoRouter.delete('/:taskId', (req, res) => {
    let id = req.params.taskId;
    let sqlText = `DELETE FROM "tasks" WHERE id=$1;`
    pool.query(sqlText, [id]) 
        .then((result) => { 
            res.sendStatus(200); 
        })
        .catch( (error) => {
            console.log('Error from db...', error);
            res.sendStatus(500);
        })
})*/

module.exports = todoRouter;