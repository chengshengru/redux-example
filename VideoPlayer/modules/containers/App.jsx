import React,{ Component } from 'react';
import {Link,IndexLink} from 'react-router';


class App extends Component{
	
	render(){
		let Active = {color:'red'};
		return (
			<div className="detail">
				<span>
					<IndexLink to="/" activeStyle={Active}>Index</IndexLink>&nbsp;&nbsp;&nbsp;&nbsp;
					<Link to={{pathname:'/about',query:{foo:'bar'}}} activeStyle={Active}>About</Link>
					<Link to='/user' activeStyle={Active}>User List</Link>
				</span>
         				{this.props.children}
        			</div>
		);
	}
}

export default App;