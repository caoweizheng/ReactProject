import axios from 'axios'

const baseUrl = 'http://10.3.133.83:8888/';
// const baseUrl = 'http://localhost:8888/';

import $ from 'jquery'

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

import router from '../router/router.js';
export default {

    get(_url, _params = {}){
        $('.loading_c').css({display:'block'})
        return new Promise((resolve, reject) => {
            axios({
                method:'get',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],

            }).then((res) => {  
                $('.loading_c').css({display:'none'})        
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
             
        return new Promise((resolve, reject) => {
                 
            axios({
                method:'post',
                url:filterUrl(_url),
                data:_params,
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
            }).then((res) => {
                resolve(res)                  
            }).catch((error) => {
                reject(error)
            })
        })
    }
}