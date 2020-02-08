import React, { Component } from "react";
import Search from "./components/searchbar";
import Results from "./components/results";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    data: null,
    limit: 96,
    lang: "en",
    q: "Space"
  };

  componentDidMount() {
    this.updateSearchResults();
  }

  updateSearchResults = () => {
    fetch("http://localhost:3001/api/searchResults", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        limit: this.state.limit,
        lang: this.state.lang,
        q: this.state.q
      })
    })
      .then(data => data.json())
      .then(res => this.setState({ data: res }));
  };

  onSearchChange = query => {
    this.setState({ q: query }, () => {
      this.updateSearchResults();
    });
  };

  render() {
    return (
      <div className="App scrollbar">
        <div className="Wrapper">
          <Results data={this.state.data} />
          <Search
            id="searchBar"
            defaultValue={this.state.q}
            onSearchChange={this.onSearchChange}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
