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

  // get from form, run POST
  sendUrls = (newURL) => {
    console.log(newURL)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm sendUrls={sendUrls}/>
        </header>

        <UrlContainer urls={this.state.urls} />
      </main>
    )
  }
}

export default App;
