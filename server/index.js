const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'todos'
});

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Server running...');
})

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.get('/api/todos', (req, res) => {
    let sql = 'SELECT * FROM todos';

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    })
});

app.post('/api/create', (req, res) => {

    if (!req.body.title) {
        res.status(400).json({
            'msq': 'Error. No todo title.'
        });
    } else {
        let sql = `INSERT INTO todos(title) VALUES (${db.escape(req.body.title)})`;

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