const handlers = require('./libs/handlers')
const express = require('express')
const {engine} = require('express-handlebars')
const app = express()

app.engine('handlebars', engine({
        defaultLayout: 'main'
    })
)

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

app.get('/',handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port, () => {
    console.log('port ::: ')
    console.log(port)
})