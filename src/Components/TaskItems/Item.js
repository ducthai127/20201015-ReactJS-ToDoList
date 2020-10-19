import React, { Component } from "react";

class Item extends Component {
  getLabelColor = (label) => {
    let labelColor;
    switch (label) {
      case "Frontend":
        return (labelColor = "#389E0D");
      case "Backend":
        return (labelColor = "#722ED1");
      case "API":
        return (labelColor = "#13C2C2");
      case "Issue":
        return (labelColor = "#CF1322");
      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };

  handleEditing = () => {
    this.props.editTask(this.props.item);
  };

  render() {
    let { item, index } = this.props;
    // let item = this.props.item;
    // let index = this.props.index;

    // label
    let elmLabel = item.labelArr.map((label, index) => {
      return (
        <i
          key={index}
          className="fa fa-circle"
          style={{ color: this.getLabelColor(label) }}
        />
      );
    });

    // priority
    let elmPriority, classPriority;
    switch (parseInt(item.priority, 10)) {
      case 1:
        elmPriority = "High";
        classPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Medium";
        classPriority = "text-success";
        break;
      case 3:
        elmPriority = "Low";
        classPriority = "text-primary";
        break;
      default:
        break;
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{elmLabel}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>
        <td className="text-center">
          <img src="./img/user_2.jpg" className="user" alt="user" />
          <img src="./img/user_3.jpg" className="user" alt="user" />
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handleEditing}
            data-toggle="modal"
            data-target="#modalTask"
          >
            Edit
          </button>
          <button type="button" className="btn btn-outline-success">
            Done
          </button>
          <button type="button" className="btn btn-outline-danger">
            Delete
          </button>
        </td>
        <td className="text-center">
          <i className="fa fa-check-square-o mr-2" />
        </td>
      </tr>
    );
  }
}

export default Item;
