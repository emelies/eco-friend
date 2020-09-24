import React from "react";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  return (
    <div className={classes.todoItem}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
