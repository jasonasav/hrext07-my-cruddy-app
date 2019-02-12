Gordon Z



var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:', this.todos)
  },
  addToDo: function(todo){
     this.todos.push(todo);
     this.displayTodos();
   },
  createDeleteButton: function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return DeleteButton;
    view.createDeleteButton() *Creates button*
    (parent).appendChild(this.createDeleteButton())
    todoList.id = i;
  },

  setUpEventListeners: function{
    var todosUL = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
  console.log(event.target.parentNode.id);
  var elementClicked = event.target;
  if (elementClicked.className === 'deleteButton') {
    handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  }

  };


};

view.setUpEventListners();
