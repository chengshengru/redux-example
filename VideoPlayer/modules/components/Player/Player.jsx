import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

//引入underscore

//引入样式
import './Player.less';

//引用全局JWPlayer
/**
 *  data 格式
 * <pre>
 *      {
 *          urls : '', // 字符串或者数组 视屏文件地址
 *          thumnail:'xxxxx', //缩略图地址
 *          labels: [
 *
 *          ]
 *          info : { //回调返回的数据
 *              
 *          }
 *      }
 * </pre> 
 */
class Player extends Component{



	constructor(props){
		super(props);
	}

	componentWillUpdate(){
		console.log('componentWillUpdate');
		this.initPlayer();
	}
	componentDidUpdate(){
		console.log('componentDidUpdate');
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		console.log(nextProps);
		console.log(nextState);
		return true;
	}
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps');
	}

	componentDidMount() {
		this.initPlayer();
	}


	initPlayer(){
		console.log('initPlayer');
		let props = this.props;
	    console.log(props);
	    let data = this.props.data;
	    if(typeof(data) !=='undefined'&&typeof(data.urls) !=='undefined'){
	    	//初始化jwplayer
		let dom = findDOMNode(this.refs.player);
		dom.id = 'player_'+new Date().getTime()+""+parseInt(Math.random()*1000);
		
		
		if(!typeof(data.urls) === 'array'){
		      throw new error("data.urls must be array");
		}
		
		let player = jwplayer(dom).setup({
			file:this.props.data.urls[0],
			image:'http://upload.cankaoxiaoxi.com/2016/0808/1470616024923.jpg'
		});


		
		
		
		this.player = player;
        
        this.bindPlayEvent();
	    }
	}
	
	/**
	 * 绑定事件
	 */
	bindPlayEvent(){
	   
	   let player = this.player;
	   
	   player.on('play',function(stateInfo){
            this.props.notify && this.props.notify('play',this.props.data,stateInfo);
        }.bind(this));
        
       player.on('buffered',function(stateInfo){
            this.props.notify && this.props.notify('play',this.props.data,stateInfo);
        }.bind(this));
        
        
       player.on('end',function(stateInfo){
            this.props.notify && this.props.notify('play',this.props.data,stateInfo);
        }.bind(this));
	}
	/**
	 * 调整播放器大小
	 */
    resize(){
        let player = this.player;
        if(player){
            
            let { width , height } = this.props;
            
            player.resize(width, height);
        }
    }
	componentWillUnmount(){
		if (this.player){
			//移除播放器
			this.player.remove();
		}
	}


	render() {
	   
	   console.log("render========>");
	
		return (
			<div className="player-container" >
                <div ref="player"></div>
                <div>测试</div>
			</div>
		);
	}
}
//限制组件的props安全
Player.propTypes = {
	data : PropTypes.object,
	setup : PropTypes.object,
	notify : PropTypes.func,
	width:PropTypes.number,
	height:PropTypes.number
};

export default Player;