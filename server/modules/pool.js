const pg = require('pg'); // requiring in database

const config = { // providing parameters to the database, as well as identifying database
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("connected to postgres..."); //connects database
});

pool.on("error", (err) => {
    console.log("error connecting to postgres...", err);
});

module.exports = pool;