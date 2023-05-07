const express = require("express");
const { connection } = require("./db");
const { todosRouter } = require("./routes/todo.routes");


const app = express()
app.use(express.json())
app.use("/todos", todosRouter)

app.listen(process.env.PORT,async() => {
    try {
        await connection
        console.log("Conectado a la DB") 
    }
     catch (error) {
        console.log(error)
     }
     console.log("Servidor OK en el puerto", process.env.PORT)
});