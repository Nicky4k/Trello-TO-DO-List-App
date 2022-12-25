import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import allLists from "./data/Todo";
import traverseArray from "./hooks/useTraverseArray";

function App() {
  const [todos, setTodos] = useState(allLists);

  const { deleteItem, updateItem, addItem, setDnD, dndify } = traverseArray();

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
  const setDND = (id) => {
    setDnD(id);
  };
  const dndifyHook = (newStatus) => {
    const updatedArr = dndify(todos, newStatus);
    setTodos(updatedArr);
  };

  return (
    <div className="App not__selectable">
      <Header />
      <div className="container__box">
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          setDND={setDND}
          todos={todos}
          dndifyHook={dndifyHook}
          statusType={"new"}
        />
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          setDND={setDND}
          todos={todos}
          dndifyHook={dndifyHook}
          statusType={"wip"}
        />
        <Container
          deleteItemHook={deleteItemHook}
          updateItemHook={updateItemHook}
          addItemHook={addItemHook}
          setDND={setDND}
          todos={todos}
          dndifyHook={dndifyHook}
          statusType={"done"}
        />
      </div>
    </div>
  );
}

export default App;
