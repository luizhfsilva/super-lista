// const { isRegExp } = require('util');
const path = require('path')
require('dotenv').config()
const pool = require('./db')
var fs = require('fs')
var copyFrom = require('pg-copy-streams').from

pool.query("CREATE TABLE products (\
    name        varchar(100) PRIMARY KEY,\
    category    varchar(100),\
    unity       varchar(100)\
    );", (err, data) => {
        console.log(err,data)
    })

pool.connect((err, client, done) => {
    var stream = client.query(copyFrom('COPY products FROM STDIN WITH CSV'))
    var fileStream = fs.createReadStream('db_products.csv')
    fileStream.on('error', done)
    stream.on('error', done)
    stream.on('finish', done)
    fileStream.pipe(stream)
})

pool.query()