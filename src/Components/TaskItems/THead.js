import React, { Component } from 'react';

class THead extends Component {
    render() {
        return (
            <thead>
              <tr>
                <th className="text-center">Order</th>
                <th className="text-center">Task</th>
                <th className="text-center">Label</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Person</th>
                <th className="text-center">Handle</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
        );
    }
}

export default THead;