import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Projects from "./Projects";
import Notes from "./Notes";
import Hobbies from "./Hobbies";
import Header from "./Header";

class EmployeeResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    _resumeData = (e, data) => {
        e.preventDefault();
        if (data === "projects") {
            this.setState({ data });
        } else if (data === "info") {
            this.setState({ data });
        } else if (data === "hobbies") {
            this.setState({ data });
        } else if (data === "notes") {
            this.setState({ data });
        }
    }

    render() {
        let pathName = this.props.location.pathname.split("/").pop();
        const employeeId = this.props.location.state;
        console.log(employeeId);
        return (
            <div>
                <Header title={'Employee Resume'} backBtn={true} navigate={`/employee`} />
                <div className="col-lg-12 col-md-12 col-sm-12">                
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link className="nav-link" onClick={e => this._resumeData(e, "info")}> Info </Link></li>
                            <li><Link className="nav-link" onClick={e => this._resumeData(e, "projects")}>Projects</Link></li>
                            <li><Link className="nav-link" onClick={e => this._resumeData(e, "hobbies")}>Hobbies</Link></li>
                            <li><Link className="nav-link" onClick={e => this._resumeData(e, "notes")}>Notes</Link></li>
                        </ul>
                    </nav>
                    {this.state.data === null ? <Info employeeInfo={pathName} /> : this.state.data === "projects" ? <Projects employeeInfo={pathName} /> : this.state.data === "info" ? <Info employeeInfo={pathName} /> : this.state.data === "hobbies" ? <Hobbies employeeInfo={pathName} /> : this.state.data === "notes" ? <Notes employeeInfo={pathName} /> : null}
                </div>
            </div>
        );
    }
}

export default EmployeeResume;