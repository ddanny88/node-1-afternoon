const messages = [];
let id = 0;



//returns the messages array: 
const getMsgs = (req, res, next)=>{
    res.status(200).json(messages);
}



const createMsg = (req, res, next)=>{
   const {text, time} = req.body;
   // pushing a new object into the array of messages
   messages.push({id, text, time});
    id++
    res.status(201).json(messages);
}




// you have to get the materials from the requst so you can send out the appropriate response. 
const updateMsg = (req, res, next)=>{
    // destucturing the text body off of the request body
    let { text, time } = req.body;
    //setting the index = the index of the array where the msg.id === the request body id
    let index = messages.findIndex( (message)=> +message.id === +req.params.id);
    // setting message = the index in the array of that message
    let message = messages[index];

    console.log(message)

    //updating the object: 
    messages[index] = {
        id: message.id,
        text: text || message.text,
        time: time
    }

    res.status(200).json(messages)
}





const deleteMsg = (req, res, next)=>{
    // get the index of the deleted message using its id. 
    const index = messages.indexOf((message)=> +message.id === +req.params.id)
    // now that you have the id, remove it from the array of messages
    messages.splice(index, 1);
    res.status(200).json(messages)   
}




module.exports = {
    createMsg, 
    getMsgs, 
    updateMsg, 
    deleteMsg
}