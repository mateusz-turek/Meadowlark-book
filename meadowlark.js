const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('O Meadowlark Travel')
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})

app.use((req, res, next, err) => {
    console.error(err.message);
    res.type('text/plain')
    res.status(500)
    res.send('500 - server side error')
})

app.listen(port, ()=> {
    console.log('port ::: ')
    console.log(port)
})