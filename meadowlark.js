const fortune = require('./libs/fortune')
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

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about', {fortune : fortune.getFortune()})
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((req, res, next, err) => {
    console.error(err.message);
    res.status(404)
    res.render('500')
})

app.listen(port, () => {
    console.log('port ::: ')
    console.log(port)
})