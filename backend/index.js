//1import json-server library
const jsonserver = require('json-server')

//2create server
const mediaPlayerServer = jsonserver.create()

//5create a middleware to parse the json data
const middleware = jsonserver.defaults()

//6set path for the data to store
const routes = jsonserver.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(routes)
//7create structure to storedata in jsonfile(db.json)
//3server port
PORT = 4000 || process.env.PORT // to deploy  env-environmental variable choose available port if 4000 is occupied

//4server run
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})