const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
var pg = require('pg');
const path = require('path');


const config = {
    user: 'postgres',
    database: 'itedq',
    password: 'postgres',
    port: 5432
};

const pool = new pg.Pool(config);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/main', function (req, res) {
    console.log("запрос получен");
    res.json({ main: 'Hello World' })
})

app.get('/questions', function (req, res) {

    console.log(req.body);

    pool.connect(function (err, client, done) {

        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query(`select * from questions;`, function (err, result) {
            done();
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.log(result.rows);

            console.log("запрос получен", req);

            res.json({ questions: result.rows })
        })
    })
})
app.post('/savequestion', function (req, res) {

    console.log(req.body);

    pool.connect(function (err, client, done) {

        if (err) {
            console.log("Can not connect to the DB" + err);
        }
        client.query(`INSERT INTO questions (question, answer) values ('${req.body.question}', '${req.body.answer}');`, function (err, result) {
            done();
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.log(result.rows);
            res.status(200).json({ response: 'success' })
        })
    })


})

app.listen(5000, console.log('сервер успешно запущен на порту 5000'))