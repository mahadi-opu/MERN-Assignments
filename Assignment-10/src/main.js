
const createTodoButton = document.querySelector(".todo .add_new_todo button");
const createTodoInput = document.querySelector(".todo .add_new_todo input");
const todoList =document.querySelector(".todo ul");



// Show Todos 
const showTodos = () => {
     const todos = getData("todos");
     console.log(todos);
    
    let content = "";
    
    todos.forEach((item, index) => {
      content +=`
        <li> <p> <i class="fa-sharp fa-solid fa-square-check"> </i> ${item} </p>
            <button onclick="deleteTodo('${item}')"><i class="fa fa-trash"></i> </button>
        </li>
      `;
});
    todoList.innerHTML = content;
};
showTodos();





// create new todo 
createTodoButton.onclick = () => {
   const todo = createTodoInput.value;

   //add validations
    if (todo){
        insertData("todos", todo)
        createTodoInput.value = "";
    } else{
        alert(" Todo must not be empty ");
    }
    showTodos();
};




// Delete Todos
const deleteTodo = (item) => {
    const todos = getData("todos");
    const updateTodos = todos.filter((data) => data != item);

    updateData("todos", updateTodos);

    showTodos();
};




















const heading = document.querySelector('.box h2');


// Heading Style
heading.style.backgroundColor = "black";
heading.style.color = "white";
heading.style.padding = "10px";

// artical Style
heading.nextElementSibling.style.backgroundColor = "red";
heading.nextElementSibling.style.color = "white";
heading.nextElementSibling.style.padding = "10px";
heading.nextElementSibling.style.marginTop = "10px";

//button style
heading.nextElementSibling.nextElementSibling.style.backgroundColor = "orange";
heading.nextElementSibling.nextElementSibling.style.color = "white";
heading.nextElementSibling.nextElementSibling.style.padding = "10px";
heading.nextElementSibling.nextElementSibling.style.border = "none";
heading.nextElementSibling.nextElementSibling.style.marginTop = "10px";

// box style
heading.parentElement.style.padding = "20px";
heading.parentElement.style.boxShadow = "0px 0px 5px 2px #ccc";