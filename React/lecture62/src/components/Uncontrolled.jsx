import React from "react";

function Uncontrolled() {


  function signup(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    // console.log(FormData.get("email"))
    console.log(Object.fromEntries(formData))
    // FormData is given by browser
  }

  return (
    <div>
      <h1>React in Form (Uncontrolled component)</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
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

export default Uncontrolled;
