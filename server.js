let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

// create a web app
let app = express()
// specify the path for the vueApp
let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')
// tells Express there are files in this directory that should be served to the client
// static indicates that these files won't change
let vueApp = express.static(pathToVueApp)

// tell the app the use the route we created
app.use('/api', routes)
// tell the server to serve vueApp
app.use('/', vueApp)

// start the server
// it will default to the preferred port of the client (process.env.PORT)
// with 3000 as a backup port
// 3000 will be used when app runs locally
// server can be reached at 127.0.0.1:3000
// 127.0.0.1:3000/api will show the API json
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})