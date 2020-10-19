import React, { Component } from 'react';

class FilterProgress extends Component {
    render() {
        return (
          <div className="filter filter--progress">
            <ul className="list-unstyled text-left">
              Filter
              <li className="py-1 display-5 lead">
                <i className="fa fa-check-square-o mr-2" />
                Done
              </li>
              <li className="py-1 display-5 lead">
                <i className="fa fa-trash-o mr-2" />
                Cancel
              </li>
            </ul>
          </div>
        );
    }
}

export default FilterProgress;