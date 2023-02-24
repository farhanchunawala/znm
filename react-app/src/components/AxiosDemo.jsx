import React from 'react';
import axios from 'axios';

export default class AxiosDemo extends React.Component {
	state = {persons:[]}

	componentDidMount() {
    	axios.get(`http://127.0.0.1:8001/customerlist/customerSelect`)
		.then(res => {
			const persons = res.data;
			this.setState({ persons });
		})
	}

	render() {
		return (
		<ul>jk
			{/* { this.state.persons.map(person => <li key={person.id}>{person.name}</li> )} */}
		</ul>
		)
	}
}