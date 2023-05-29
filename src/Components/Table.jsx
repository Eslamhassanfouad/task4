import React from "react";

function Table(props) {
  return (
    <div>
      {props.students.map((stud) => (
        <div>
          <p>Name: {stud.name}</p>
          <p>Age: {stud.age}</p>
          <p>id: {stud.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Table;
