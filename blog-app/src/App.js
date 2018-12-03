import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import the API & graphqlOperation helpers as well as the mutation
import { API, graphqlOperation } from "aws-amplify";
import { createBlog, createPost, createComment } from "./graphql/mutations";
// next, we create a function to interact with the API

class App extends Component {
  state = { blogName: "" };

  createBlog = async () => {
    const blog = { name: this.state.blogName };
    await API.graphql(graphqlOperation(createBlog, blog));
    console.log("blog successfully created");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
