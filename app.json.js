require('dotenv').config()
const express = require('express')
//const path = require('path')
const PORT = process.env.PORT || 3000
//const pool = require('./db')
const app = express()
const select_items = require('./templates/select_items')

// import db from json
const data = require('./db.json')

app.use('/static', express.static('public'))

app.get('/teste', (req, res) => {
	res.send(data)
})

app.get('/', (req,res) => {
    //pool.query('SELECT unity, name FROM products ORDER BY category, name', (err,data) => {
        //res.send(select_items(data.rows))
        res.send(select_items(data))
    //})
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
