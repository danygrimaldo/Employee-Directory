import React from "react";

class Sorter extends React.Component {
  state = {
    defaultList: [],
  };

  handleNameSort = () => {
    this.setState({ sort: this.state.sort((a, b) => a.name > b.name) });
  };
}

export default Sorter;
