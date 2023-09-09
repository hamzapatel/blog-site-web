"use client"; // This is a client component 👈🏽
import { useRef } from "react";
import classes from "./page.module.css";

export default function User() {
  debugger;
  const userNameInputRef = useRef();
  const emailIdInputRef = useRef();
  const passwordInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = userNameInputRef.current.value;
    const enteredEmailId = emailIdInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredName, enteredEmailId, enteredPassword);
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <div className={classes.input}>
          <label htmlFor="email">User Name</label>
          <input ref={userNameInputRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="emailid">Email id</label>
          <input ref={emailIdInputRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Password</label>
          <input ref={passwordInputRef} />
        </div>
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}
