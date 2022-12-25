import React, { useState } from "react";

const Modal = ({ toggleModal, updateItemHook, id, addItemHook, newItem }) => {
  const [newTitle, setNewTitle] = useState();
  const modalCloseHandler = (e) => {
    if (e.target.className === "modal__container") toggleModal();
  };

  const setInputHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const submitHandler = () => {
    toggleModal();
    if (!newTitle) return;
    if (newItem) {
      addItemHook(newTitle);
    } else {
      updateItemHook(id, newTitle);
    }
  };

  return (
    <div onClick={modalCloseHandler} className="modal__container">
      <div className="modal__Box">
        <input
          autoFocus
          onChange={setInputHandler}
          type="text"
          placeholder="todo name"
          className="input_modal-container"
        ></input>
        <button onClick={submitHandler} className="submit__btnTodo">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
