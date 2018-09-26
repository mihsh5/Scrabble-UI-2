import React, { PureComponent } from "react";
import Tile from "./tile";

class Row extends PureComponent {
  render() {
    const { rowContent } = this.props;
    return (
      <div className={`row ${this.props.className}`}>
        {rowContent.map((tile, index) => {
          return <Tile tileContent={tile} key={index} />;
        })}
      </div>
    );
  }
}

export default Row;
