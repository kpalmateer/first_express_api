let express = require('express')
let router = express.Router()

// the router tells the app what to send in response
router.get('/', function(req, res, next){
    // res defines the response from the server to the client
    res.json({'message': 'hello guys! v2.0'})
})

// allows other components to access the router
module.exports = router