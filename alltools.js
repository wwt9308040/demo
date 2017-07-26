 /*
        重置某对象的某个属性;
      */
  
  function addClass(obj , cn){
				
				//检查obj中是否含有cn
				if(!hasClass(obj , cn)){
					obj.className += " "+cn;
				}
				
			}
			
			/*
			 * 判断一个元素中是否含有指定的class属性值
			 * 	如果有该class，则返回true，没有则返回false
			 * 	
			 */
			function hasClass(obj , cn){
				
				//判断obj中有没有cn class
				//创建一个正则表达式
				//var reg = /\bb2\b/;
				var reg = new RegExp("\\b"+cn+"\\b");
				
				return reg.test(obj.className);
				
			}
			
			/*
			 * 删除一个元素中的指定的class属性
			 */
			function removeClass(obj , cn){
				//创建一个正则表达式
				var reg = new RegExp("\\b"+cn+"\\b");
				
				//删除class
				obj.className = obj.className.replace(reg , "");
				
			}
			
			/*
			 * toggleClass可以用来切换一个类
			 * 	如果元素中具有该类，则删除
			 * 	如果元素中没有该类，则添加
			 */
			function toggleClass(obj , cn){
				
				//判断obj中是否含有cn
				if(hasClass(obj , cn)){
					//有，则删除
					removeClass(obj , cn);
				}else{
					//没有，则添加
					addClass(obj , cn);
				}
				
			}
     
     /*
        某对象缓慢移动移动动画
        obj要执行动画的对象
			target执行动画的目标位置
			speed移动的速度
			attr 要改变的样式
			callback回调函数
     */
     
			function move(obj,attr,target,speed,callback){
					clearInterval(obj.timer );
					
					var current = parseInt(getStyle(obj,attr));

					if(current>target ){
						speed = -speed;
					}

					obj.timer = setInterval(function(){
						
				
						var oldValue = parseInt(getStyle(obj,attr));
						
				
						var newValue = oldValue + speed;
						
					
						if(speed<0&&newValue < target||speed>0&&newValue>target){
							newValue = target;
						}
						
					
						obj.style[attr] = newValue + "px";
						
					
						if(newValue == target){
	
							clearInterval(obj.timer);
							callback&&callback();
						}
						
						
					},30);
					

			};
     
     
     /*
			 * 定义一个函数，用来获取指定元素的当前的样式
			 * 参数：
			 * 		obj 要获取样式的元素
			 * 		name 要获取的样式名
		
			};	 
      */
     
     function getStyle(obj , name){
				
				if(window.getComputedStyle){
					//正常浏览器的方式，具有getComputedStyle()方法
					return getComputedStyle(obj , null)[name];
				}else{
					//IE8的方式，没有getComputedStyle()方法
					return obj.currentStyle[name];
				}
        
        /*
        定义一个函数，用来为指定元素绑定响应函数
		  eventStr 不加on*/
        function bind(obj , eventStr , callback){
				if(obj.addEventListener){
					//大部分浏览器兼容的方式
					obj.addEventListener(eventStr , callback , false);
				}else{
					/*
					 * this是谁由调用方式决定
					 * callback.call(obj)
					 */
					//IE8及以下
					obj.attachEvent("on"+eventStr , function(){
						//在匿名函数中调用回调函数
						callback.call(obj);
					});
				}
			}
      
     /*判断obj中有没有cn class*/
     	function hasClass(obj , cn){
				
				
				var reg = new RegExp("\\b"+cn+"\\b");
				
				return reg.test(obj.className);
				
			}
