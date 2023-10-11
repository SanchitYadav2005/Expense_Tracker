const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT;
const expenseRoutes = require('./routes/exprenseRoutes');
const cors = require('cors');



app.use(cors())
app.use(express.json());

app.get('/', (requrest,response)=>{
    response.json({message: "hello from the backend"})
})

app.use('/api/expenses/', expenseRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(port, (error)=>{
            if(error){
                console.log("error:", error);
            }else{
                console.log("port is serving on ", port);
            }
        })
        console.log("MongoDB atlas connected");
    })
    .catch((error)=>{
        console.log("error: ", error)
    })
