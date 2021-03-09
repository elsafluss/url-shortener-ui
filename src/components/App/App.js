import React, { Component } from 'react';
import './App.css';
import { getUrls, sendUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      urls: [],
    }
  }

  componentDidMount() {
    getUrls().then((data) => this.setState({ urls: data.urls }))
  }

  createUrl = (newURL) => {
    sendUrls(newURL)
    .then((response) => {
      if (response.ok) {
        const newestURL = response.json()
        return newestURL
      }
    }).then((newestURL) => 
      this.setState({ urls: [...this.state.urls, newestURL] })
      )
  }

  render() {
    return (
      <main className="App">
        <header className="header">
          <h1>URL Shortener</h1>
          <UrlForm createUrl={this.createUrl} />
        </header>
        <UrlContainer urls={this.state.urls} />
      </main>
    )
  }
}

export default App;
