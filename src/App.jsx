import { useState } from "react";
import "./App.css";

const todos = [
  {
    id: 1,
    label: "firstOne",
  },
  {
    id: 2,
    label: "secondOne",
  },
  {
    id: 3,
    label: "thirdOne",
  },
  {
    id: 4,
    label: "fourthOne",
  },
  {
    id: 5,
    label: "fifthOne",
  },
];

function App() {
  const [todoList, setTodoList] = useState(todos);
  const [isError, setIsError] = useState(false);
  const isFirstIndex = 0;
  const isLastIndex = todos.length - 1;

  console.log(todoList, "todo list before");

  const handleMoveDown = (index) => {};
  const handleMoveUp = (index) => {
    let temp;
    let updatedTodos = [...todoList];
    if (index !== isFirstIndex) {
      temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index - 1];
      updatedTodos[index - 1] = temp;
    } else {
      setIsError(!isError);
    }
    setTodoList(updatedTodos);
  };
  console.log(todoList, "todolist");
  return (
    <>
      <div>Todo list app</div>
      {todoList.length > 0 &&
        todoList.map((todo, index) => {
          return (
            <div className="main-div">
              <div>{`${todo.id} - ${todo.label}`}</div>
              <div>
                <button
                  className="move-button"
                  onClick={() => handleMoveUp(index)}
                >
                  Move Up
                </button>
                <button
                  className="move-button"
                  onClick={() => handleMoveDown(index)}
                >
                  Move Down
                </button>
              </div>
              {isError ? <p className="error-case">It cannot be moved</p> : ""}
            </div>
          );
        })}
    </>
  );
}

export default App;
