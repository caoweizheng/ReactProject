const db = require('../tool/db.js');
const apiResult = require('../tool/apiResult.js');

module.exports = {
	reg(app,jwt){
		app.post('/login', async (req,res) => {
			console.log('login')
			     
			let manager = {
				username:req.body.username,
				password:req.body.password
			}

			// check db
			let result = await db.select('manager',manager);

      res.send(result);
			     
		  }),
      app.post('/getState',(req,res) => {

        res.send(apiResult(true,'token'))
      })
      // react
      app.post('/userlogin', async (req,res) => {
           
      let user = {
        phone:req.body.phone,
        pass:req.body.password
      }
      console.log(user)

      ///// check db
      let result = await db.select('user',user);


            if(result.state){                     
               let token = jwt.sign({'phone':result.data[0].phone}, '123', {
                    'expiresIn': 60*60 // 设置过期时间
                })
               console.log(token)
                    
               res.send(apiResult(true,token));
            }else{
                res.send(apiResult(false,result)); 
            }
           
      }),
      // react
      app.post('/userRegister',async (req,res) => {

        let user = {
          phone:req.body.phone,
          pass:req.body.password,
          nickname:null,
          gender:null,
          address:[],
          collection:{},
          order:[],
          browserHistory:[],
          update:{}

        }
        let result = await db.insert('user',user); 

        res.send(apiResult(result))

      }),
      // react
      app.get('/loginState',async (req,res) => {

        let token = req.headers['token'];
        console.log(token)
             
        
        if(!token) {
            console.log('notoken');
            res.send(apiResult(false,'','NoState'));
        } else {
            console.log('token------------',token)

            jwt.verify(token,'123',(error,result) => {
                if(error){
                    
                    res.send(apiResult(false,'NoState'));
                } else {
                    res.send(apiResult(true,result));
                }
            })
        }

      }),
      // react 判断用户是否存在
      app.post('/checkUser',async (req,res) => {

          let phone = req.body.phone;

            let result = await db.select('user',{phone:phone});
                 
            res.send(result)
      }),
      // react  更新用户
      app.post('/updateUser',async (req,res) => {    

        let username = req.body.phone;

        let update = {};
        if(req.body.update != undefined){
          update = JSON.parse(req.body.update);
        }

        let user = await db.select('user',{phone:username});

        if(user.state){
        
          let data = {
            empry:''
          }
         
          if(req.body.pass != undefined){
              data.pass = req.body.pass
          }
          if(req.body.nickname != undefined){
                 
              data.nickname = req.body.nickname
          }
          if(req.body.gender != undefined){
              data.gender = req.body.gender
          }
          if(req.body.address != undefined){
             if(update.type == 'address'){
                user.data[0].address[update.idx] = req.body.address;
              }else{
                user.data[0].address.push(req.body.address)
              }
                data.address = user.data[0].address

          }
          if(req.body.collection != undefined){
          
              if(update.type == 'collection'){
                     
                let loveArr = eval(user.data[0].collection);
                let isAdd = true;
                  for(let i in loveArr){

                      let love = JSON.parse(loveArr[i])

                      if(love._id==update.proId){
                        
                        isAdd = false;  
                  }     
                }

                if(isAdd){
                    user.data[0].collection[update.proId] = req.body.collection
                    data.collection = user.data[0].collection;
                }else{
                  console.log(loveArr)
                       
                  delete loveArr[update.proId];
                  console.log(loveArr)

                  data.collection = loveArr;
                }
              }
          }
               
          if(req.body.browserHistory != undefined){
          console.log('=================data============',data)

              if(update.type == 'browser'){
                let isAdd = true;
                user.data[0].browserHistory.forEach((item,idx) => {
                    
                     if(JSON.parse(item)._id == update.proId){
                        isAdd = false;
                     }
                              
                })
                if(isAdd){
                  user.data[0].browserHistory.push(req.body.browserHistory);
                  data.browserHistory = user.data[0].browserHistory;
                  
                }

              }
          }

          if(req.body.order != undefined){
            if(update.type == 'order'){
                let orders = JSON.parse(req.body.order)
                console.log('==============orders==============orders=============',orders)
                     
                  if(update.orderType == 1){
                    orders.map((item) => {
                      item.orderType = 1;
                      item.orderID = Date.now();
                      user.data[0].order.push(item)
                    })
                  }else if(update.orderType == 2){
                      orders.map((item) => {
                        user.data[0].order.map((res) => {
                          if(res._id == item){
                            res.orderType = 2
                          }  
                        })
                      })

                  }
                       
                data.order = user.data[0].order;
            }
          }
               
          let result = await db.update('user',{'phone':username},{$set:data});
          res.send(result)
        }else{

          res.send(user)
          
        }
             
      }), 
      // react
      app.post('/getUser',async (req,res) => {
            let phone = req.body.phone;
            let result = await db.select('user',{phone:phone});
                           

            res.send(result)
      }),




      app.get('/userlist',async (req,res) => {

            let result = await db.select('users');
                 
            res.send(apiResult(true,result.data,''))
      }),
      app.post('/delUser',async (req,res) => {

            let userId = req.body.uId;

            let result = await db.remove('users',userId);
                 
            res.send(result);
      })

	}
}