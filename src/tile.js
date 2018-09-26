import React, { PureComponent } from "react";

class Tile extends PureComponent {
  render() {
    const { tileContent } = this.props;
    return (
      <div className="tile">
        <span> {tileContent} </span>
      </div>
    );
  }
}

export default Tile;
