import React from "react";

class Hobbies extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>                
                <div className="col-md-12">
                    <p className="employee-info">Hobbies of {this.props.employeeInfo}</p>
                </div>
            </div>
        );
    }
}

export default Hobbies;