const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'todos'
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());


app.get('/api/todos', (req, res) => {
    let sql = 'SELECT * FROM todos';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

app.post('/api/create', (req, res) => {

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

app.delete('/api/delete/:id', (req, res) => {
    let sql = `DELETE FROM todos WHERE id=${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
});

app.put('/api/check/:id/:status', (req, res) => {
    let sql = `UPDATE todos SET done=${db.escape(req.params.status)} WHERE id=${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).json(result);
    })
});

if(process.env.NODE_ENV == 'production') {
    app.use(express.static(__dirname, 'public'));

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname, '/public/index.html');
    });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running...');
});