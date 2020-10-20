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
        <td className="text-center font-weight-bold">{index + 1}</td>
        <td className="text-center font-weight-bold">{item.name}</td>
        <td className="text-center">{elmLabel}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>
        <td className="text-center">
          <img src="./img/user_2.jpg" className="user" alt="user" />
          <img src="./img/user_3.jpg" className="user" alt="user" />
        </td>

        <td className="text-center">
        <div className="form-group d-flex align-items-center mb-0">
          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={this.handleEditing}
            data-toggle="modal"
            data-target="#modalTask"
          >
            <i className="fa fa-pencil" />
          </button>
          
          <select className="form-control font-weight-bold" id="handle" name="handle">
            <option className="font-weight-bold" value={1}>Not Yet Started</option>
            <option className="font-weight-bold" value={2}>In Progress</option>
            <option className="font-weight-bold" value={3}>Done</option>
            <option className="font-weight-bold" value={4}>Cancel</option>
          </select>
          </div>
        </td>
        <td className="text-center display-5 lead">
          <i className="fa fa-check-square-o mr-2" />
        </td>
      </tr>
    );
  }
}

export default Item;
