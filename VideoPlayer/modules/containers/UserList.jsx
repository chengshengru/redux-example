import React,{ Component ,PropTypes} from 'react';
import {Link} from 'react-router';

class UserList extends Component{



	render(){

		let list = [];
		for(let i=1;i<100;i++){
			let url = '/user/item/'+i;
			list.push(<Link to={url} key={i}>{'User   '+i }</Link>);
			list.push(<br key={'br'+i}/>)
		}

		return (
			<div>
				{list}
			</div>
		);
	}
}


export default UserList;