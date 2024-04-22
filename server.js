const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cards = require('./dbCards')

const url = 'mongodb+srv://waleedghanimeg:Parole@cluster0.zdbpgct.mongodb.net/dating-app-mern';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const app = express()
const port = process.env.port || 8001
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => { res.status(200).send("Hello Web Age") })


app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    try {
        const data = cards.create(dbCard)
        res.status(201).send(data)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/dating/cards', async (req, res) => {

    try {
        const data = await cards.find()
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send(err)
    }

})

app.listen(port, () => console.log('Listining on localhost: ${port} '))