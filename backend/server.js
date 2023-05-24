import {config} from 'dotenv'
import pkg from 'pg'
const {Client} = pkg

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { request } from 'http'

const app = express()
config()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


const client = new Client({
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    user: process.env.USER
})

client.connect(function (err) {
    if (err) throw err
    console.log('connected to shit')
})

app.get('/', (req, res) => {
    res.json('hej')
})

app.get('/accounts', async (req, res) => {
    try{
        const result = await client.query('SELECT * FROM accounts')
        res.json(result.rows)
    } catch (err){
        console.error(err)
        res.sendStatus(500)
    }

})
app.get('/posts', async (req, res) => {
    try{
        const result = await client.query('SELECT * FROM posts')
        res.json(result.rows)
    } catch (err){
        console.error(err)
        res.sendStatus(500)
    }

})




app.listen(8800, () => {
    console.log("server is running")
})
