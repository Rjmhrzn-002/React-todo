import { useState } from "react";

const Todo = () => {
  const [Todos, setTodo] = useState([]);
  const [newTask, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask !== "") {
      setTodo([...Todos, newTask]);
      setTask("");
    }
  }

  function taskDone(index) {
    const taskNodeList = document.querySelectorAll(".todos");
    const currentTask = taskNodeList[index].querySelector("h3");
    currentTask.classList.toggle("todoDone");
  }

  function removeTask(index) {
    confirm("Are you sure you want to remove this task ?");
    setTodo(Todos.filter((_, i) => i !== index));
  }

  return (
    <>
      <main className="todo-container">
        <section id="userInput">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="inputTodo"
              placeholder="Enter your task"
              value={newTask}
              onChange={handleChange}
            />
            <button type="submit">Add task</button>
          </form>
        </section>
        <br />
        <hr />
        <br />
        <section id="displayTodos">
          {Todos.map((todo, index) => (
            <div key={index} className="todos">
              <h3>{todo}</h3>
              <span>
                <button className="icons" onClick={() => taskDone(index)}>
                  ✔
                </button>
                <button className="icons" onClick={() => removeTask(index)}>
                  ✖
                </button>
              </span>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Todo;
