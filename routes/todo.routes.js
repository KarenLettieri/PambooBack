const express = require("express");
const { TodoModel } = require("../model/TodoModel");

const todosRouter = express.Router();

todosRouter.get("/", async (req, res) => {
  try {
    let data = await TodoModel.find();
    res.send(data);
  } catch (error) {
    res.send({
      message: error.message,
    });
  }

  todosRouter.post("/addtodo", async (req, res) => {
    //Como mongoose no proporciona otra forma de subir datos que no sea insertMany() se hace esta funcion
    try {

      let data = new TodoModel(req.body);
      await data.save();
      res.send({
        message: "Task added",
      });
    } catch (error) {
      res.send({
        message: message.error,
      });
    }
  });
});

todosRouter.post("/:id", (req,res) =>{
    const {id} = req.params
    res.send({
        message: id
    })
})

module.exports={
    todosRouter
}
