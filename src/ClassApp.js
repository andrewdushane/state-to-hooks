import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      email: props.email || ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      email: this.state.email
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Your Info</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleNameChange}
              className="input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleEmailChange}
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
  }
}

export default App;
