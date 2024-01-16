import "./App.css";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import TodoInput from "./components/TodoInput";

function App() {
  var [todoItems, settodoItems] = useState([
    "Buy eggs!",
    "Hit the gym",
    "Take a shower",
  ]);

  var [completedItems, setCompletedItems] = useState([]);

  function addTodo(todoItem) {
    settodoItems([...todoItems, todoItem]);
  }

  function deleteTodo(todoItem) {
    settodoItems(todoItems.filter((e) => e != todoItem));
  }

  function completeTodo(todoItem){
    setCompletedItems([...completedItems, todoItem]);
    settodoItems(todoItems.filter((e) => e != todoItem));
  }

  return (
    <div className="app">
      <h1 className="title">ToDoist</h1>
      <div>
        <TodoInput onAddItem={addTodo} />
      </div>
      <div className="list-block">
        <h2 className="title">Todo</h2>
        <hr />
        {todoItems.map((todo) => (
          <ToDoItem key={todo} title={todo} onDelete={deleteTodo} onComplete={completeTodo} />
        ))}
        <div className="list-block">
          <h2 className="title">Completed</h2>
          <hr />
          {completedItems.map((todo) => (
          <ToDoItem key={todo} title={todo} onDelete={deleteTodo} isCompleted/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
