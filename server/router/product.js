const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
const ObjectID = require('mongodb').ObjectID;
module.exports = {

	reg(app){
		// 获取全部商品	
		app.get('/getProduct',async (req,res) => {

			let result = await db.select('products');

			res.send(result);
		}),
		// 搜索商品
		app.post('/searchProduct',async (req,res) => {

			let keyWord = req.body.keyword;
			let reg = new RegExp(keyWord);


			let result = await db.select('products',{proName:reg});
			console.log(result)
			     

			res.send(result);
		}),
		// 获取商品详情
		app.post('/detilsPro',async (req,res) => {

			let proId = req.body.proId;
			console.log(proId)
			     
			let result = await db.select('products',{'_id':new ObjectID(proId)});

			res.send(result);

		})
	}
}