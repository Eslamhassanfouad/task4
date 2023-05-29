import React, { useState } from "react";
import Table from "./Table";

export function Form() {
  const [students, setStudents] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState();
  const [iDInput, setIDInput] = useState();

  const [nameErr, setNameErr] = useState("");
  const [ageErr, setageErr] = useState("");
  const [idErr, setidErr] = useState("");

  const validate = () => {
    // if (nameInput && nameInput.length < 3)
    //   setNameErr("name must be more than 3 characters");
    // else setNameErr(null);
    // if (ageInput && ageInput < 18) setageErr("You must be +18");
    // else setageErr(null);
    // if (iDInput && iDInput > 100) setidErr("Invalid ID ");
    // else setidErr(null);
    // if (!nameInput) setNameErr("name is required");
    // if (!ageInput) setageErr("age is required");
    // if (!iDInput) setidErr("id is required");

    if (nameInput) {
      if (nameInput.length < 3)
        setNameErr("name must be more than 3 characters");
      else setNameErr(null);
    } else {
      setNameErr("name is required");
    }
    if (ageInput) {
      if (ageInput < 18 || ageInput>80) setageErr("You must be between (18 & 80)");
      else setageErr(null);
    } else setageErr("Age is required");
    if (iDInput) {
      if (iDInput > 100) setidErr("Max ID's were entered");
      else setidErr(null);
    } else setidErr("ID required");
  };

  return (
    <div className="text-center ">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
            if (!nameErr && !ageErr && !idErr)
            setStudents((prev) => [
              ...prev,
              { name: nameInput, age: ageInput, id: iDInput },
              ]);
          }}
        >
          <input
            type="number"
            name="id"
            placeholder="id"
            onChange={(e) => setIDInput(e.target.value)}
          />
          <p>{idErr}</p>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            onChange={(e) => setNameInput(e.target.value)}
          />
          <p>{nameErr}</p>
          <input
            type="number"
            name="age"
            placeholder="Student Age"
            onChange={(e) => setAgeInput(e.target.value)}
          />
          <p>{ageErr}</p>
          <button type="submit">Add Student</button>
        </form>
        
        <div>
          <p>Name: {nameInput}</p>
          <p>Age: {ageInput}</p>
          <p>id: {iDInput}</p>
        </div>
      </div>
      <Table students={students} />
    </div>
  );
}
