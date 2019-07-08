import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import EmployeeData from "./components/EmployeeData";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeResume from "./components/EmployeeResume";
import NoPageFound from "./components/NoPageFound";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>				
				<div className="container-fluid">
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/employee" component={EmployeeData} exact/>
						<Route path="/employee/:id" component={EmployeeDetails} />
						<Route path="/employee-resume/:name" component={EmployeeResume} />
						<Route path="/page-not-found" component={NoPageFound} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
