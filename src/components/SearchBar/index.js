import React from "react";
import employees from "../directory";
// import employees from "../../directory.json";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let filteredEmployees = this.props.employees.filter((employee) => {
      return employee.name.indexOf(this.state.search) !== -1;
    });

    return (
      <div>
        {filteredEmployees.map((employee) => {
          return <SearchBar employee={employee} key={employee.id} />;
        })}
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
