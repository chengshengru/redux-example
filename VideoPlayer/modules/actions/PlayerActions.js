/**
 *
 */

export const ACTION_PLAY = 'ACTION_PLAY';
export const ACTION_PAUSE = 'ACTION_PAUSE';
export const ACTION_START= 'ACTION_START';
export const ACTION_STOP = 'ACTION_STOP';


 /**
  * 播放视屏
  * @param data 格式
  * <pre>
  * {
  * 	urls:[],
  * 	label:[],
  * 	//额外的数据，供回调使用
  * 	data:{
  * 		
  * 	}
  * }
  * </pre>
  */
 export function play(data){
 	return {
 			type : ACTION_PLAY,
 			data:data
 	};
 }

 export function pause(){
      return {
          type : ACTION_PAUSE
      };
 }


 export function start(){
    return {
        type : ACTION_START
    };
 }

 export function stop(){
    return {
        type : ACTION_STOP
    };
 }


