import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}
export default ToDoItem;
