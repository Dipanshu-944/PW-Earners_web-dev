import React, { useRef } from "react";

function Userefuncontollled() {
    const nameRef = useRef("Anshu")

  function signup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    console.log(nameRef.current.value)
  }

  return (
    <div>
      <h1>React in Form (Uncontrolled component)</h1>
      <form action="" onSubmit={signup}>
        <label ref={nameRef} htmlFor="name">Name : </label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Userefuncontollled;
