import React from "react";
import "./App.css";

class Fake extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      message: []
    };
  }
  input = e => {
    this.setState({ text: e.target.value });
  };
  send = e => {
    e.preventDefault();
    let newMessage = [this.state.text, ...this.state.message];
    this.setState({ message: newMessage, text: "" });
  };
  render() {
    return (
      <div>
        <form>
          <textarea
            rows="4"
            cols="50"
            onChange={this.input}
            value={this.state.text}
          ></textarea>
          <button onClick={this.send}>Send Message</button>
          <input type="file" />
        </form>
        <ul>
          {this.state.message.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Fake;
