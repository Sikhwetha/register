import React, { useEffect, useState } from "react";
import "./Todo.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

function Todo() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todolist")) || [];
    const savedCompletedTodos = JSON.parse(localStorage.getItem("completedTodos")) || [];
    setAllTodos(savedTodo);
    setCompletedTodos(savedCompletedTodos);
  }, []);
  

  const handleAddTodo = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    const updatedTodoArr = [...allTodos, newTodoItem];
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };

  const handleDelete = (index, isCompleted) => {
    const updatedArr = isCompleted
      ? [...completedTodos]
      : [...allTodos];
    updatedArr.splice(index, 1);

    if (isCompleted) {
      setCompletedTodos(updatedArr);
    } else {
      setAllTodos(updatedArr);
      localStorage.setItem("todolist", JSON.stringify(updatedArr));
    }
  };

  const handleComplete = (index) => {
    const now = new Date();
    const dd = now.getDate();
    const mm = now.getMonth() + 1;
    const yyy = now.getFullYear();
    const h = now.getHours();
    const s = now.getMilliseconds();
    const time = `${dd}/${mm}/${yyy} ${h}:${s}`;

    const filtered = {
      ...allTodos[index],
      time: time,
    };

    const updatedCompletedArr = [...completedTodos, filtered];
    setCompletedTodos(updatedCompletedArr);

    const updatedTodoArr = [...allTodos];
    updatedTodoArr.splice(index, 1);
    setAllTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  return (
    <div className="mula">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What is the task?"
            />
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="What is the description?"
            />
          </div>

          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddTodo}
              className="orimaryBtn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${!isCompleteScreen && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {isCompleteScreen === false &&
            allTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiTwotoneDelete
                    className="icon"
                    onClick={() => handleDelete(index, false)}
                  />
                  <BsCheck2All
                    className="check-icon"
                    onClick={() => handleComplete(index)}
                  />
                </div>
              </div>
            ))}

          {isCompleteScreen === true &&
            completedTodos.map((item, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <small>Completed on: {item.time}</small>
                  </p>
                </div>
                <div>
                  <AiTwotoneDelete
                    className="icon"
                    onClick={() => handleDelete(index, true)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
