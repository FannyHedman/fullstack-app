import { config } from 'dotenv'
import pkg from 'pg'
const { Client } = pkg

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

app.get('/accounts', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM accounts')
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})
app.get('/posts', async (req, res) => {

    try{
        const result = await client.query('SELECT * FROM posts ORDER BY created DESC')
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }

})


app.post('/posts', async (req, res) => {
    const {sender, text} = req.body;
    try{
         await client.query(
            'INSERT INTO posts (sender_id, text) VALUES($1, $2)',
            [sender, text]
        )
        res.sendStatus(201)
    } catch (err){
        console.error(err)
        res.sendStatus(500)
    }

})

app.post('/accounts', async (req, res) => {
    const { username, password } = req.body
    const values = [username, password]

    const account = await client.query(
        'SELECT id, username, password FROM accounts WHERE username = $1 AND password = $2',
        values
    )

    const user = account.rows.find(
        (acc) => acc.username === username && acc.password === password
    )

    if (user) {
        res.status(200).json({ id: user.id, message: 'Logged in' })
    } else {
        res.status(400).send('Not found')
    }
})


app.get('/account', async (req, res) => {
    const { id } = req.body
    try {
        const result = await client.query('SELECT * FROM accounts WHERE id = $1',
        [id]
        )
        const user = result.rows.find(
            (acc) => acc.id === id
        )

        res.status(200).json(result.rows)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }

})


app.listen(8800, () => {
    console.log('server is running')
})
