const { express, routes } = require('./controller')
const app = express()
const path = require('path')
const port = +process.env.PORT || 3000
const { engine } = require('express-handlebars')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('./static'))
app.use(express.urlencoded({extended: false}), routes)

routes.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
})

app.listen(port, () =>{
    console.log(`You are using port http://localhost:${port}`);
})