import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add_Todo":
      return [...todos, newTodo(action.payload.inputValue)];

    case "mark_Todo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            // complete: !todo.complete,
            color: "",
            check: "",
          };
        }

        return todo;
      });

    case "mark_UnTodo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            //complete: !todo.complete,
            color: "green",
            check: "checked",
          };
        }

        return todo;
      });

    case "Delete_Todo":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const newTodo = (value) => {
  return {
    id: Date.now(),
    inputValue: value,
    complete: false,
    color: "red",
    check: "true",
  };
};

const TodoUseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  const [icolor, setIcolor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputValue);
    dispatch({
      type: "add_Todo",
      payload: { inputValue: inputValue },
    });
  };

  useEffect =
    (() => {
      console.log(todos);
    },
    [todos]);

  return (
    <div>
      <h1>My Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <input type="submit" value="Add Task" />
      </form>

      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
          // setIcolor={setIcolor}
        />
      ))}
    </div>
  );
};

export default TodoUseReducer;
