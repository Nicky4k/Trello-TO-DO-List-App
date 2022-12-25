import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import allLists from "./data/Todo";
import traverseArray from "./hooks/useTraverseArray";

function App() {
  const [todos, setTodos] = useState(allLists);

  const { deleteItem, updateItem, addItem } = traverseArray();

  const deleteItemHook = (id) => {
    const updatedArray = deleteItem(todos, id);
    setTodos(updatedArray);
  };
  const updateItemHook = (id, title) => {
    const updatedArray = updateItem(todos, id, title);
    setTodos(updatedArray);
  };
  const addItemHook = (title) => {
    const updatedArray = addItem(todos, title);
    setTodos(updatedArray);
  };

  return (
    <div className="App not__selectable">
      <Header />
      <div className="container__box">
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          todos={todos}
          statusType={"new"}
        />
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          todos={todos}
          statusType={"wip"}
        />
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          todos={todos}
          statusType={"done"}
        />
      </div>
    </div>
  );
}

export default App;
