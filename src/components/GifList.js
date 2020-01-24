import React from "react";

// export class GifList extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.gifs.map(gif => {
//           console.log(gif);
//           return (
//             <li key={gif.id}>
//               <img src={gif.images.downsized_medium.url} alt={gif.slug} />
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

const GifList = props => {
  console.log(props.gifs);
  return (
    <div>
      <ul>
        {props.gifs.map(gif => {
          console.log(gif);
          return (
            <li key={gif.id}>
              <img src={gif.images.downsized_medium.url} alt={gif.slug} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GifList;
