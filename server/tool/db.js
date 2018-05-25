const Mongoclient = require('mongoDB').MongoClient;

const ObjectID = require('mongodb').ObjectID;

const dbUrl = 'mongodb://localhost:27017';

const apiResult = require('./apiResult.js');

let db;

Mongoclient.connect(dbUrl,(error,client) => {

	db = client.db('reactpro');
})


module.exports = {

	async select(_collection,_condition={}){

		let result = await db.collection(_collection).find(_condition).toArray();

		return apiResult(result.length > 0,result);
	},
    async insert(_collection,_data){
        try{
            let res = await db.collection(_collection).insert(_data);
            
            return apiResult(res.insertedCount>0,res); 
        }catch(err){
            return apiResult(false,err); 
        }
    },
    async remove(_collection,id){
        try{
            let res = await db.collection(_collection).findAndRemove({'_id':new ObjectID(id)});
            console.log('remove',res.lastErrorObject)
                 
            return apiResult(res.lastErrorObject.n > 0,res); 
        }catch(err){
            console.log(err)
            return apiResult(false,err); 
        }
    },
    async update(_collection,proId,_data){
        try{
            let res = await db.collection(_collection).updateOne(proId,_data);
            // console.log(res)
                 
            return apiResult(res.result.n>0,res); 
        }catch(err){
            console.log(err)
            return apiResult(false,err); 
        }
    }

}

