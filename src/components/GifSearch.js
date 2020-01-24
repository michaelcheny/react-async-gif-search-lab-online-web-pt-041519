import React, { useState } from "react";

// export class GifSearch extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: ""
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.submitCallback(this.state.input);
//     this.setState({
//       input: ""
//     });
//   };

//   handleChange = e => {
//     this.setState({
//       input: e.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <h4>Enter a Search Term:</h4>
//           <input
//             type="text"
//             value={this.state.input}
//             onChange={this.handleChange}
//           ></input>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

const GifSearch = props => {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.submitCallback(input);
    setInput("");
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Enter a Search Term:</h4>
        <input type="text" value={input} onChange={handleChange}></input>
        <input type="submit" />
      </form>
    </div>
  );
};

export default GifSearch;
