import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
  };
    
  render() {
    return (
      <div className="col-md-12">
        <p className="employee-info">Info of {this.props.employeeInfo}</p>
        <hr></hr>
        </div>
    );
  }
}

export default Info;