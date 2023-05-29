import React, { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [itemInp, setItemInp] = useState("");

  return (
    <div className="text-center p-5">
      <input
        type="text"
        onChange={(e) => {
          setItemInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setItems((prev) => [...prev, itemInp]);
        }}
      >
        add
      </button>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>{" "}
            <button
              onClick={() => {
                setItems((prev) =>
                  prev.filter((item, ind) => ind !== index)
                );
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
