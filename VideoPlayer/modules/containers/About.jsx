import React,{ Component ,PropTypes} from 'react';
import {Link} from 'react-router';

class About extends Component{

	componentDidMount(){
		console.log(this.context);

		this.context.router.setRouteLeaveHook(
			this.props.route,
			this.routerWillLeave
		);
	}
	routerWillLeave(){
		alert('leave');
	}
	render(){

		let query = this.props.location.query;
		
		let data = '';

		for(let key in query){
			data+=(key+'=>'+query[key])+'{ \'\n\'}';
		}

		return (
			<div>

				{data}
			</div>
		);
	}
}

About.contextTypes = {
    router: PropTypes.object.isRequired
};

export default About;