import React from "react";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Header from "./Header";

class EmployeeData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: []
		}
		// const isHomePage = false;
        // History.push({isHomePage: isHomePage});
        console.log(props);
	};

	componentDidMount() {
		fetch("https://reqres.in/api/users?page=2")
			.then(res => res.json())
			.then(
			(result) => {
				this.setState({
					isLoaded: true,					
					data: result.data
				});
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
				this.setState({
					isLoaded: true,				
					error
				});
			}
		)
	}

	render() {		
		const employeeData = this.state.data;
		
		const columns = [{
			Header: 'List of all employees',
			accessor: 'name',
			Cell: e => <Link to={{pathname: `/employee/${e.original.id}`, empDetails: e.original }}>{e.original.first_name}</Link>
		}]
		
		return (
			<div>
				<Header title={'Employee List'} backBtn={true} navigate={"/"} />
				<div className="container">
					<ReactTable 
						data={employeeData} 
						columns={columns} 
						defaultPageSize = {5}
						pageSizeOptions = {[6, 10]}
					/>					
				</div>
			</div>
		);
	}
};

export default EmployeeData;