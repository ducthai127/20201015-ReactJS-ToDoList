import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
              <tr>
                <th className="text-center font-weight-bold display-5 lead">Order</th>
                <th className="text-center font-weight-bold display-5 lead">Task</th>
                <th className="text-center font-weight-bold display-5 lead">Label</th>
                <th className="text-center font-weight-bold display-5 lead">Priority</th>
                <th className="text-center font-weight-bold display-5 lead">Person</th>
                <th className="text-center font-weight-bold display-5 lead">Handle</th>
                <th className="text-center font-weight-bold display-5 lead">Status</th>
              </tr>
            </thead>
        );
    }
}

export default THead;