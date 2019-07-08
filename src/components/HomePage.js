import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";

const HomePage = (props) => {    
    return (
        <div>
            <Header title={'Home'} backBtn={false} />
            <div className="container">
                <Link to="/page-not-found"><button className="home-page-btn" >Display Not Found</button></Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/employee"><button className="home-page-btn" >Show Employee List</button></Link>
            </div>
        </div>
    );
};

export default HomePage;