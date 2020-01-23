import React, { Component } from "react";

export class GifList extends Component {
  render() {
    console.log(this.props.gifs);
    return (
      <ul>
        {this.props.gifs.map(gif => {
          return (
            // console.log(gif);
            <li>
              <img
                key={gif.id}
                src={gif.images.downsized_medium.url}
                alt={gif.slug}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GifList;
