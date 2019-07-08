import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        this.state = this.props.location.empDetails;
        return (
            <div>
                <Header title={'Employee Detail'} backBtn={true} navigate={"/employee"} />
                <div className="container">
                    <div className="employee-header"><label><b>Employee ID: { this.state.id }</b></label><label className="employee-resume-link"><Link to={{pathname:`/employee-resume/${this.state.first_name}`, state: this.state.id}}>Flip to Resume</Link></label></div>
                    <hr></hr>
                    <div className="employee-page-css">
                        <p><b>First Name:</b>&nbsp; { this.state.first_name }</p>
                        <p><b>Last Name:</b>&nbsp; { this.state.last_name }</p>
                        <p><b>Email:</b>&nbsp; { this.state.email}</p>
                    </div>                
                </div>
            </div>
        );
    }
}

export default EmployeeDetails;