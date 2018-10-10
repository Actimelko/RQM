const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Quote = require('./server/schema/Quote.js');
const app = express();
if (mongoose.connect(process.env.MONGO_KEY, { useNewUrlParser: true })) {
    console.log('connected to db...');
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use('/dist', express.static(process.cwd() + '/dist'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
})

app.get('/api/quotes', (req, res) => {
    Quote.find(function(err, data) {
        if (err) return next(err);
        if (!data) return res.json({message: "Nothing quotes"})

        return res.json(data);
    })
})

app.post('/api/add-quote', (req, res) => {
    console.log(req.body);
    const quote = req.body.quote;
    const author = req.body.author;
    const validation = quote && author;
    if (!validation) {
        const errors = {};
        errors.quote = 'Please input quote';
        errors.author = 'Please input author';
        return res.status(422).send(errors);
    }

    Quote.findOne({quote: quote, author: author}, function(err, data) {
        if (err) return next(err);
        if (data) return res.status(422).send({exist: 'This quote exist'});

        const newQoute = new Quote({
            quote: quote,
            author: author
        })

        newQoute.save((err,data) => {
            if (err) return next(err);
            return res.json(data);
        })
    })
})


app.post('/api/check', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})
const port = 3000;
app.listen(port, () => console.log('Listen on port ' + port));