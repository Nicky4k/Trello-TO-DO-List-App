import React, { useState } from "react";
import Modal from "./Modal";

const ToDo = ({ todo, deleteItemHook, updateItemHook, dragId }) => {
  const [showModal, setShowModal] = useState(false);

  const editToDoHandler = () => {
    setShowModal(true);
  };

  const deleteToDoHandler = () => {
    deleteItemHook(todo.id);
  };

  const dragStarthandler = (e) => {};

  const dragEndHandler = (e) => {
    console.log(dragId);
  };

  const toggleModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id={todo.id}
      key={todo.id}
      onDragStart={dragStarthandler}
      onDragEnd={dragEndHandler}
      draggable
      className="todo__strip"
    >
      <div className="upper_half">
        <h3>
          {todo.title.length > 20
            ? todo.title.slice(0, 20) + "..."
            : todo.title}
        </h3>
        <h4>{todo.eventDate}</h4>
      </div>
      <div className="lower_half">
        <h5>{todo.dateCreated}</h5>
        <div className="tools__todo">
          <div onClick={editToDoHandler} className="tools__item">
            ✏️
          </div>
          <div onClick={deleteToDoHandler} className="tools__item">
            ❌
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          id={todo.id}
          updateItemHook={updateItemHook}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default ToDo;
