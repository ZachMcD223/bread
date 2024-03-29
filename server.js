
const express = require('express')
require('dotenv').config()
const breadRoutes = require('./controllers/bread')
const methodOverride = require('method-override')
const app = express()

//middlewares
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/bread', breadRoutes)
const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))
