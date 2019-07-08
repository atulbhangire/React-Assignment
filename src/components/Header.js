import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return(
            <div className="container-fluid">
                <div className="home-page-header"> 
                    { this.props.backBtn ? <Link to={`${this.props.navigate}`}><span className="home-back-symbol">&#8249;</span></Link> : '' } 
                    <div className="header-p"><p className="header-menu-word">{this.props.title}</p></div>
                </div>
                <br/>
            </div>         
        );
    }
}

export default Header;