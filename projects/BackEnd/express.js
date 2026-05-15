const express = require('express');
const app = express();
const { createTodo, updateTodo } = require('./zodTypes.js');
const { todo } = require('./mongoDB.js');
const cors = require('cors');                                                    /* We can't hit the backend with different frontend unless backend itself allowed it, this error is the cors error. */    
app.use(express.json());
app.use(cors({                                                                   /* Here it means now backend will response to this frontend only, which is react not any others, but if we would do something like 'app.use(cors())' then it means the backend will allow all frontend, not only a specific frontend. */

  origin: [

    "http://localhost:5174",                                                     /* Now React of my local machine only can have the access of the backend. */
    "http://localhost:5173"

  ]

}));


app.post("/todo", async (req,res) => {

  const createPayLoad =  req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if(!parsedPayLoad.success){

    res.status(411).json({

      message: "You have sent the wrong inputs"

    });
    return;

  }
  await todo.create({

    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false

  });
  res.json({

    message: "Todo created..."

  });

});

app.get("/todos", async (req,res) => {

  const todos = await todo.find({});
  res.json({

    todos: todos

  });

});

app.put("/completed", async (req,res) => {

  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if(!parsedPayLoad.success){

    res.status(411).json({

      message: "You have sent the wrong id"

    });
    return;
        
  }
  await todo.updateOne({

    _id: req.body.id

  },
  {

    completed: true

  });
  res.json({

    message: "Todo marked as completed..."

  });
    
});

app.listen(3000);