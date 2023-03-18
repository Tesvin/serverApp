const express = require('express')
const app = express()
require('dotenv').config()

const projectController = require('./controllers/projects_controller')


//middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use('/projects', projectController)
//STYLING
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Welcome to my book app!")
})

const PORT = process.env.PORT



app.listen(PORT)