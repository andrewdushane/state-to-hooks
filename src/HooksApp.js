import React, { useState } from "react";
import "./App.css";

const useInputChange = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  return [value, handleInputChange];
};

const App = props => {
  const [name, handleNameChange] = useInputChange(props.name);
  const [email, handleEmailChange] = useInputChange(props.email);
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      name,
      email
    });
  };
  return (
    <div className="container">
      <h1>Your Info</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleNameChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleEmailChange}
            className="input"
          />
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
