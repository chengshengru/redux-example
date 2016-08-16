import React,{ Component ,PropTypes} from 'react';

class UserItemContainer extends Component{

	componentDidMount(){

	}

	render(){
		return (
			<div>
				{this.props.params.id}
			</div>
		);
	}
}


export default UserItemContainer;