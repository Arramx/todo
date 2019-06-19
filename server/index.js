const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

const todos = require('./routes');

app.use('/api', todos);


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