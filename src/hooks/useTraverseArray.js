const traverseArray = function () {
  const deleteItem = (tree, id) => {
    const updatedArr = tree.filter((el) => el.id !== id);
    return updatedArr;
  };
  const updateItem = (tree, id, newTitle) => {
    const updatedArray = tree.map((el) => {
      if (el.id === id) {
        el.title = newTitle;
      }
      return el;
    });
    return updatedArray;
  };
  const addItem = (tree, newTitle) => {
    const node = {
      id: new Date().getTime(),
      title: newTitle,
      dateCreated: new Date().toLocaleDateString(),
      eventDate: new Date(2021, 10, 3).toLocaleDateString(),
      status: "new",
    };
    return [...tree, node];
  };

  return { deleteItem, updateItem, addItem };
};

export default traverseArray;
