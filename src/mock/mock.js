import Mock from "mockjs"
import qs from "querystring"
Mock.mock(/ajax\/index/,()=>{
    let data = require('./test.json')
    return data 
})
Mock.mock(/ajax\/book/,(option)=>{
    let id = option.url.split("?id=").pop()
    let data;
    if(!id){
        data=require('./book/18218.json')
    }else{
        data= require(`./book/${id}.json`)
    }
    return data 
})
Mock.mock(/\/ajax\/chapter/,()=>{
    let data = require('./reader/chapter.json')
    return data 
})
Mock.mock(/ajax\/chapter\/data/,(option)=>{
    let chapter_id = option.url.split('?').pop().split('=').pop()
    let data = require(`./reader/data/data${chapter_id}.json`)
    return data 
})
Mock.mock(/ajax\/chapter\/newdata/,(option)=>{
    let chapter_id = option.url.split('?').pop().split('=').pop()
    let data = require(`./reader/newdata/data${chapter_id}.json`)
    return data 
})
Mock.mock(/ajax\/search/,'get',()=>{
    let data = require('../mock/search.json')
    return data 
})
Mock.mock(/ajax\/female/,'get',()=>{
    let data = require('../mock/channel/female.json')
    return data 
})
Mock.mock(/ajax\/male/,'get',()=>{
    let data = require('../mock/channel/male.json')
    return data 
})

Mock.mock(/ajax\/category/,'get',()=>{
    let data = require('../mock/category.json')
    return data 
})
Mock.mock(/ajax\/rank/,"get",()=>{
    let data = require('../mock/rank.json')
    return data
})