const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js')
const ObjectID = require('mongodb').ObjectID;

module.exports = {
	reg(app){
		app.post('/addCar',async (req,res) => {
				// console.log('proname:',req.body.proName)
				let tableName = req.body.username;
				let goods = {
					pId:req.body.pId,
					proName:req.body.proName,
					actPrice:req.body.actPrice,
					jxPrice:req.body.jxPrice,
					imgPath:req.body.imgPath,
					qty: 1
				}

				let g_result = await db.insert(tableName,goods); 

	        	res.send(apiResult(g_result))
			     
		}),
		app.post('/getCar',async (req,res) => {
			let tableName = req.body.username;
			let conId = req.body.pId;
			let result;
			// console.log(conId)
			     
			if(conId == undefined){
				result = await db.select(tableName);
			}else{
				result = await db.select(tableName,{pId:conId});				     
			}
			res.send(result);
			     

		}),
		app.post('/delCar',async (req,res) => {
			let tableName = req.body.username;
			let conId = req.body.proId;
			// console.log(conId)
			     
			let result = await db.remove(tableName,conId);
			res.send(result);
			     

		}),
		app.post('/updateCar',async (req,res) => {
			let tableName = req.body.username;
			let conId = req.body.proId;
			console.log('qty',req.body.qty)
			     
			let data = {
				qty:req.body.qty
			}
			console.log(data)
			     

			let result = await db.update(tableName,{pId:conId},{$set:data});
			res.send(result)
		})
	}
}