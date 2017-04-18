module.exports = {
    /**
     * 测试接口
    **/
    async getUserInfo(ctx){
   	let returnData = {
	    success:true,
            data:{
	        text: '测试接口',
		time: new Date().getTime(),
	    }
	}
	
	ctx.body = returnData
    }
}
