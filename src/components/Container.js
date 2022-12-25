import React, { useState } from "react";
import Modal from "./Modal";
import ToDo from "./ToDo";

const Container = ({
  todos,
  statusType,
  deleteItemHook,
  updateItemHook,
  addItemHook,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [dragId, setDragId] = useState();

  const dragEnterHandler = (e) => {
    setDragId(e.currentTarget.id);
  };

  const toggleModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id={statusType}
      onDragEnter={dragEnterHandler}
      draggable="true"
      className="Container__todos"
    >
      <div className={statusType}>
        <h3>{statusType.toLocaleUpperCase()}</h3>
        {statusType === "new" && (
          <div onClick={() => setShowModal(true)} className="add__todos">
            ➕
          </div>
        )}
      </div>
      <div className="totodContainer">
        {todos.map((todo) => {
          if (todo.status === statusType) {
            return (
              <ToDo
                dragId={dragId}
                updateItemHook={updateItemHook}
                deleteItemHook={deleteItemHook}
                key={todo.id}
                todo={todo}
              />
            );
          }
        })}
      </div>
      {showModal && (
        <Modal
          addItemHook={addItemHook}
          newItem={true}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default Container;
