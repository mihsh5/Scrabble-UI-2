import React, { Component } from "react";
import axios from "axios";
import Row from "./row";

class Scrabble extends Component {
  state = {
    board: [
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "c",
        "a",
        "r",
        "t",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "r",
        "-",
        "a",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "o",
        "-",
        "r",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "r",
        "-",
        "e",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "e",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "s",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ],
      [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-"
      ]
    ],
    rack: ["w", "e", "c", "l", "o", "m", "s"]
  };

  getTheBestMove = () => {
    console.log("Requesting server");
    /*
    axios
      .post("http://localhost:5000/", {
        board: this.state.board,
        rack: this.state.rack
      })
      .then(response => response.json())
      .then(jsonRes => console.log(jsonRes));
    */

    fetch("http://127.0.0.1:5000/api/generate-move", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        board: this.state.board,
        rack: this.state.rack
      }
    })
      .catch(res => console.log("Some error", res))
      .then(response => {
        console.log("In First", response);
        return response.json();
      })
      .then(jsonRes => {
        console.log("In second");
        return console.log(jsonRes);
      });
  };

  render() {
    const { board, rack } = this.state;
    return (
      <div className="container">
        <div className="board">
          {board.map((row, index) => {
            return <Row rowContent={row} key={index} />;
          })}
          <Row className="rack" rowContent={["Rack:", ...rack]} />
        </div>
        <button className="moveButton" onClick={this.getTheBestMove}>
          {" "}
          Genereate Move{" "}
        </button>
      </div>
    );
  }
}
export default Scrabble;
