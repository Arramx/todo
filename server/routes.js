const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'todos'
});

router.get('/todos', (req, res) => {
    let sql = 'SELECT * FROM todos';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

router.post('/create', (req, res) => {

    if (!req.body.text) {
        res.status(400).json({
            'msg': 'Error. No todo text.'
        });
    } else {
        let sql = `INSERT INTO todos(text, done) VALUES (${db.escape(req.body.text)}, 0)`;

        db.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).json(result);

        });
    }

});

router.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM todos WHERE id=${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
});

router.put('/check/:id/:status', (req, res) => {
    let sql = `UPDATE todos SET done=${db.escape(req.params.status)} WHERE id=${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
});

module.exports = router;