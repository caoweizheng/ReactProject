const user = require('./user.js');

const product = require('./product.js');

const carlist = require('./carlist.js');

const express = require('express');

const path = require('path');

const cookiepaser = require('cookie-parser');

const session = require('express-session');

const app = express();

const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

const apiResult = require('../tool/apiResult.js');

// 全局使用body-parser
app.use(bodyParser.urlencoded({exteded:false}));
//
app.use(express.static(path.join(__dirname,'../web/')));
//
app.use(cookiepaser());

app.use(session({
    secret:'abc',
    name:'account',
    cookie:{maxAge:60*30*1000},
    resave:false,
    saveUninitialized:false
}))

// 支持跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,token,Content-Length,Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const filter = (req, res ,next) => {
      
     let url = req.originalUrl;
     console.log(url)
          
     if(!(url == '/getState')){
        return next();
     }else{

        let token = req.headers['token'];
        console.log(token)
             
        
        if(!token) {
            console.log('notoken');
            res.send(apiResult(false,'','NoState'));
        } else {
            console.log('token------------',token)

            jwt.verify(token,'123',(error,result) => {
                if(error){
                    console.log(666)
                         
                    res.send(apiResult(false,'','NoState'));
                } else {
                    next();
                }
            })
        }
     }

}

app.use(filter);




user.reg(app,jwt);
product.reg(app);

carlist.reg(app);

const http = require('http');


module.exports = function(_port = 88){

	// 开启服务器，定义端口
	app.listen(_port);

}