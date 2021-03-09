import React, { Component } from 'react';

class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      long_url: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newURL = {}
    newURL.long_url = this.state.long_url
    newURL.title = this.state.title
    this.props.sendUrls(newURL)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />

        <input
          type="text"
          placeholder="URL to Shorten..."
          name="long_url"
          value={this.state.long_url}
          onChange={(e) => this.handleChange(e)}
        />

        <button onClick={(e) => this.handleSubmit(e)}>Shorten Please!</button>
      </form>
    )
  }
}

export default UrlForm;
