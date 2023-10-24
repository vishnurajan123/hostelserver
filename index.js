// import json server
const jsonServer= require('json-server')

// create json server using json-server library
const HostelServer=jsonServer.create()

// set up path/route for db.json file
const router=jsonServer.router("db.json")

const middleware=jsonServer.defaults()

const port=4000 || process.env.PORT

HostelServer.use(middleware)
HostelServer.use(router)

HostelServer.listen(port,()=>{
    console.log(`Hostel server started at port number ${port} and waiting for request...!`);
})