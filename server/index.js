const express = require("express");
const { json } = require("body-parser");
const controller = require("./controllers/messages_controller")

const app = express();


//configure the app to parse json from the body:
app.use(json());
app.use(express.static("../public/build"));


// end points
app.get("/api/messages", controller.getMsgs);
app.post("/api/messages", controller.createMsg);
app.delete("/api/messages/:id", controller.deleteMsg);
app.put("/api/messages/:id", controller.updateMsg)


const port = 3001;
app.listen( port, ()=> {console.log(`Listening on port${port}`)});