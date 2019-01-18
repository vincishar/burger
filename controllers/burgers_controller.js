const express = require('express');
const {selectAll, insertOne, updateOne, deleteOne} = require('../config/orm'); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', selectAll);
app.post('/', insertOne);
app.get(`/burgers/update/:id`, updateOne); 
app.get(`/burgers/delete/:id`, deleteOne);

module.exports = app;