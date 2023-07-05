const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found')
})

app.listen(port, ()=> {
    console.log('port ::: ')
    console.log(port)
})