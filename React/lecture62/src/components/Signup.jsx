import React, { useState } from "react";

function Signup() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function signup(e) {
    e.preventDefault();
    // console.log("signup successfully")
    console.log("Form Submitted");
    console.log(form);
  }

  function handleInput(e) {
    // let value = e.taeget.value
    // let name = e.target.name

    const { value, name } = e.target;
    setForm((prev) => ({ ...prev, [name]: value })); //bractket notation
  }

  return (
    <div>
      <h1>React in Form (Controlled component)</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input  value={form.name}  type="text" name="name" id="name" onInput={handleInput} />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email" onInput={handleInput} />
        <br />
        <label value={form.name} htmlFor="password">Password : </label>
        <input
          type="text"
          name="password"
          id="password"
          onInput={handleInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
