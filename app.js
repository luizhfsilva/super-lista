const express = require('express')
const pool = require('./db')
const app = express()
const select_items = require('./templates/select_items')

app.use('/static', express.static('public'))

app.get('/', (req,res) => {
    pool.query('SELECT unity, name FROM products ORDER BY category, name', (err,data) => {
        res.send(select_items(data.rows))
    })
})

app.listen(3000, () => console.log('Server ready'))