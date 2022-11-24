var express = require('express');
var router = express.Router();
let todo = []
/* GET home page. */

router.get("/", (req, res) => {
  res.render("index.pug");
})

router.get('/todo', function(req, res, next) {
  res.render('index', { title: 'My todos' });
});


router.post('/todo', (req,res) => {
   
  if (todo.length == 0){
    todo.push(req.body)
    console.log("User added")
    return res.json({message : "User added"});
  }
  
  for (var i of todo){
    if (i.name == req.body.name){

      i.todos.push(req.body.todos[0]);
      console.log("Todo added");
      return res.json({message : "Todo added"});
    }
    
  }
   todo.push(req.body);
  console.log("User added");
  return res.json({message : "User added"});

})

router.get('/user/:id', (req, res) => {
  console.log(req.params.id)
  for (var i of todo){
    if (i.name == req.params.id){
      console.log(i)
      return res.json({dict : i});

  }
  else{
    return res.json({message : "User not found"});
  }

}
})

module.exports = router;
