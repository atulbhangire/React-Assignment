import React from "react";

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-md-12">
                <p className="employee-info"> Projects of {this.props.employeeInfo}</p>
            </div>
        );
    }
}

export default Projects;