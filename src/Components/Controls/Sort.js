import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: ""
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.props.changeSortType(this.state.sortType);
    })
  }

  render() {
    return (
      <div className="form-group text-left display-5 lead mb-4">
        <label className="font-weight-bold mb-2">Sort by:</label>
        <select className="form-control font-weight-bold" name="sortType" onChange={this.onChange} >
          <option className="font-weight-bold" value="asc" >From A to Z</option>
          <option className="font-weight-bold" value="desc" >From Z to A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
