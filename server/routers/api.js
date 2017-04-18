const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')

const routers = router
	.get('/user/getUserinfo.json',userInfoController.getUserInfo)

module.exports = routers
