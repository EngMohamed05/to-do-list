import { useState } from "react";

export default function TodoList() {
  const [itemsValue, setItemsValue] = useState([]);
  const [itemValue, setItemValue] = useState("");
  function addItem() {
    if (itemValue.trim() === "") return;
    const newArray = [...itemsValue, itemValue];
    setItemsValue(newArray);
    setItemValue("");
  }
  function makeUp(index) {
    const updatedList = [...itemsValue];
    if (index > 0) {
      [updatedList[index], updatedList[index - 1]] = [
        updatedList[index - 1],
        updatedList[index],
      ];
      setItemsValue(updatedList);
    }
  }

  function makeDown(index) {
    const updatedList = [...itemsValue];
    if (index < updatedList.length - 1) {
      [updatedList[index], updatedList[index + 1]] = [
        updatedList[index + 1],
        updatedList[index],
      ];
      setItemsValue(updatedList);
    }
  }

  function deleteItem(index) {
    const newArray = itemsValue.filter((_, i) => i !== index);
    setItemsValue(newArray);
  }

  return (
    <>
      <header>
        <h1>To-Do List</h1>
      </header>
      <div className="body">
        <div className="enter">
          <input
            type="text"
            placeholder="Enter a Task..."
            value={itemValue}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addItem();
              }
            }}
            onChange={(event) => setItemValue(event.target.value)}
          />
          <button className="add" onClick={addItem}>
            Add
          </button>
        </div>
        <div className="list">
          <ul>
            {itemsValue.map((item, index) => {
              return (
                <div>
                  <li key={index}>
                    {item}{" "}
                    <div className="buttons">
                      <button
                        className="delete"
                        onClick={() => deleteItem(index)}
                      >
                        Delete
                      </button>
                      <button className="up" onClick={() => makeUp(index)}>
                        Up
                      </button>
                      <button className="down" onClick={() => makeDown(index)}>
                        Down
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
