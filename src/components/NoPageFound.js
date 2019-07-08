import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
    return (
        <div className="container">
            No Files Found!!! <Link to="/">Go Back</Link>
        </div>
    );
};

export default NoPageFound;