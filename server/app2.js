
var pg = require('pg');
const path = require('path');

const config = {
    user: 'postgres',
    database: 'itedq',
    password: 'postgres',
    port: 5432
};

const pool = new pg.Pool(config);



pool.connect(function (err, client, done) {

    if (err) {
        console.log("Can not connect to the DB" + err);
    }
    client.query("INSERT INTO questions (question, answer) values (155, 'ответ мой');", function (err, result) {
        done();
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        console.log(result.rows);
        pool.end()
    })
})
