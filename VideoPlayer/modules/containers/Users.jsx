import React,{ Component ,PropTypes} from 'react';
import {Link} from 'react-router';
import {UserList} from './UserList';
class Users extends Component{

	componentDidMount(){

	}

	render(){


		return (
			<div>

				<UserList />
			</div>
		);
	}
}


export default Users;