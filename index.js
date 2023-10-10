const express = require("express")
const http = require("http");
const app = express();
const expressServer = http.createServer(app);


const {Server} = require("socket.io")
const io = new Server(expressServer)

// jekono user 'connection' e enter korte parbe
io.on('connection',(socket)=> {
    console.log("new user connected")
    
    // setTimeout(()=> {
    //  // data is sent from server to client
    //  //kono event create na korle .send use korle
    //  // bydefault 'message' event triggered hoy 
    //   socket.send("Data send from server to client after 5 seconds")
    // },5000)
    
    // setInterval(()=> {
    //   let d = new Date();
    //   let t = d.getTime();
    //   socket.send(t)
    // },10)

    //create an custom event to send data from server
    //to client
    // setTimeout(()=> {
    //  socket.emit('myEvent',"Data is sent by custom event from server to client")
    // },1000)

   
       // data is received from server to client... as .send method is used from client , 
       //we have to access this data through 'message' event
    //    socket.on('message',(msg)=> {
    //     console.log(msg)
    //    })
   

    // data is received from server to client... as custom event is used from client , 
       //we have to access this data through the event name
    //    socket.on('customEvent',(msg)=> {
    //     console.log(msg)
    //    })
       

    //broadcasting : specific group of user or all user er kase
    //data send korar way
    // this data can be accessed by all users
    // io.sockets.emit("myBroadcast","Hello everyone, this is broadcasting")


    //user jokhn disconnect hbe mean tab close korbe 
    //tokhn show korbe
    socket.on('disconnect',()=> {
        console.log('user disconnected')
    })
})

//namespace use kore different endpoints create korte pari..jeta sobai access korte pare na
//namespace only serverside e toiri korte hoy


app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/index.html")
})
expressServer.listen(3001, ()=> {
    console.log("Server is running at 3000 port")
})