import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import the API & graphqlOperation helpers as well as the mutation
import { API, graphqlOperation } from "aws-amplify";
import { createBlog, createPost, createComment } from "./graphql/mutations";
import { getBlog } from "./graphql/queries";
// next, we create a function to interact with the API

class App extends Component {
  state = { blogName: "", postTitle: "", postContent: "", content: "" };

  // Create a new blog
  blog = async () => {
    const blog = { name: this.state.blogName };
    await API.graphql(graphqlOperation(createBlog, blog));
    console.log("blog successfully created");
  };

  // Create a blog post
  post = async () => {
    const post = {
      title: this.state.postTitle,
      content: this.state.postContent,
      postBlogId: this.props.blogId // Or where your blogId data lives
    };
    await API.graphql(graphqlOperation(createPost, post));
    console.log("post successfully created");
  };

  // Create a comment on a blog post
  comment = async () => {
    const comment = {
      content: this.state.content,
      commentPostId: this.props.commentPostId
    };
    await API.graphql(graphqlOperation(createComment, comment));
    console.log("comment successfully created");
  };

  async componentDidMount() {
    // Get blog data
    const data = await API.graphql(
      graphqlOperation(getBlog, { id: "48e6bbb2-0945-4e05-8dd6-58f4b9553c64" })
    );
    console.log("blog successfully fetched", data);
  }

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
