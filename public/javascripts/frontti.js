
if(document.readyState !== "loading"){
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function(){
      console.log("Document ready after waiting!");
      initializeCode();
  })
}


function initializeCode(){
const button = document.getElementById("submit-data");



button.addEventListener("click", function() {
  const nameInput = document.getElementById("input-name");
  const taskInput = document.getElementById("input-task");
  console.log(nameInput);
  console.log(taskInput);
  fetch("/todo", {
    method: "post",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({name: nameInput.value, todos: [taskInput.value]})
   })
   .then(response => response.json())
   .then(data => {
       console.log(data);
       const para = document.createElement("p");
       const node = document.createTextNode(data.message);
       para.appendChild(node);
       document.body.appendChild(para)
       
   })



})
const search = document.getElementById("search");
search.addEventListener("click", function() {
  const searchInput = document.getElementById("search-name");
  fetch(`/user/${searchInput.value}`, {
    method: "get",
    headers: {
        "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if('dict' in data){
      const para2 = document.createElement("p");
      const node_name = document.createTextNode(data.dict.name);
      const node_todos = document.createTextNode(data.dict.todos);
      
      
      para2.appendChild(node_name);
      para2.appendChild(node_todos);
      document.body.appendChild(para2);

    }
    else{
      const para3 = document.createElement("p");
      const node_message = document.createTextNode(data.message);
      para3.appendChild(node_message);
      document.body.appendChild(para3);
    }



  })

}


)}



