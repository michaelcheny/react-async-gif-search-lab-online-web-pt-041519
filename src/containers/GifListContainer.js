import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export class GifListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  async componentDidMount() {
    // fetching in here
  }

  submitSearch = async inputQuery => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${inputQuery}&api_key=dc6zaTOxFJmzC&rating=g`
    );
    const { data } = await res.json();
    console.log(data);
    data.map(gif => {
      // console.log(gif.url);
      this.setState(
        {
          gif: gif.url
        },
        console.log(this.state)
      );
    });
  };

  // does the data fetching and then renders its corresponding sub components
  render() {
    return (
      <div>
        <GifSearch submitCallback={this.submitSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
