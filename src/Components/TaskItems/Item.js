import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProgress: "",
    };
  }

  onChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.props.changeProgress(
          this.props.item.id,
          this.state.selectedProgress
        );
      }
    );
  };

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

    // member
    let elmPerson = item.memberIDArr.map((memberID, index) => {
      return (
        <img
          key={index}
          src={`./img/${memberID}.jpg`}
          className={`user ${memberID}`}
          alt={memberID}
        />
      );
    });

    // progress
    let classProgress;
    switch (parseInt(item.status, 10)) {
      case 1:
        classProgress = "fa-anchor";
        break;
      case 2:
        classProgress = "fa-spinner";
        break;
      case 3:
        classProgress = "fa-check-square-o";
        break;
      case 4:
        classProgress = "fa-ban";
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
        <td className="text-center">{elmPerson}</td>
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
            <select
              className="form-control font-weight-bold"
              name="selectedProgress"
              onChange={this.onChange}
            >
              <option className="font-weight-bold" value={1}>
                Not Yet Started
              </option>
              <option className="font-weight-bold" value={2}>
                In Progress
              </option>
              <option className="font-weight-bold" value={3}>
                Done
              </option>
              <option className="font-weight-bold" value={4}>
                Cancel
              </option>
            </select>
          </div>
        </td>
        <td className="text-center display-5 lead">
          <i className={`fa ${classProgress} mr-2"`} />
        </td>
      </tr>
    );
  }
}

export default Item;
