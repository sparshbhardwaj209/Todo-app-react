import React from "react";
import { useState } from "react";

import './TodoInput.css';
import AddIcon from '@mui/icons-material/Add';

export default function TodoInput({onAddItem}) {
  var [currentInputValue, setcurrentInputValue] = useState('');

  function onInputChange(event) {
    setcurrentInputValue(event.target.value);
  }

  function addTodoItem() {
    onAddItem(currentInputValue);
    setcurrentInputValue('');
  }

  return (
    <div className="todo-input-div">
      <input className="todo-input" type="text" value={currentInputValue} onChange={onInputChange} />
      <button className="todo-input-add" onClick={addTodoItem}>
        <AddIcon/> Add
      </button>
    </div>
  );
}
