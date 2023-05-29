import React, { useState } from "react";

export function Validation() {
  let blocks = [
    "This is samsung mobile",
    "-----------------------",
    "samsung mobile costs 500$",
    "-----------------------",
    "This is iphone mobile",
    "-----------------------",
    "iphone mobile costs 1000$",
    "-----------------------",
    "This is nokia mobile",
    "-----------------------",
    "nokia mobile costs 100$",
    "-----------------------",
  ];
  const [filteredBlocks, setFilteredBlocks] = useState(blocks);

  const filterBlocks = (value) => {
    let newBlocks = blocks.filter((block) => {
      return block.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredBlocks(newBlocks);
  };
  return (
    <div className="text-center p-5 mt-6">
      <input
        className="bg-dark text-light "
        onChange={(e) => {
          filterBlocks(e.target.value);
        }}
        type="text"
      />
      <div>
        {filteredBlocks.map((block) => {
          return <div>{block}</div>;
        })}
        {filteredBlocks.length===0&&<p>no matching word</p>}
      </div>
    </div>
  );
}
