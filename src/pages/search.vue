<template>
  <div class="search" :style="{width:screen_width+'px'}">
      <common-header :title="search_title" from="index"></common-header>
      <div class="search-container" >
        <div class="search-top">
                <router-link class="top__back" :to="{name:'index'}"></router-link>
                <div class="search-input">
                    <span class="search-icon" @click="getSearchData"></span>
                    <input type="text" placeholder="输入书名/作者/关键字" v-model.trim="user_cnt" v-focus @keydown="getkey">
                </div>
        </div>
        <div class="search-container-section"  v-if="tagShow">
            <div>
                <ul class="search-tag">
                    <li class="u-tag" v-for="(item,index) in tag_data" :key='index' 
                    @click="searchTag(item)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="search-container-section -cnt" v-if="!tagShow">
            <div class="search-err" v-if="finish">没有搜索到符合的内容</div> 
            <div class="search-cnt">
                <ul class="book-list">
                    <li v-for="(item,index) in search_content" :key="index">
                        <div class="u-book">
                            <div class="book-cnt">
                                <div class="book-cover">
                                    <img v-lazy="item.cover" :alt="item.title">
                                </div>
                                <div class="book-info">
                                    <h3 class="book-title single-line">{{item.title}}</h3>
                                    <p class="book-summary">{{item.intro}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import commonHeader from "../components/common-header"
import qs from "querystring"
export default {
    components:{
        commonHeader
    },
    data(){
        return {
            search_title:'',
            tag_data:['我的绝美女神老婆','复仇千金','盗墓','豪门小老婆','庶女','神医','魔兽','我的老婆是双胞胎'],
            screen_width:'',
            tagShow:true,
            search_content:'',
            user_cnt:'',
            finish:false
        }
    },
    methods:{
        searchTag(data){
            this.user_cnt=data;
            this.getSearchData()
        },
        getkey(){
            if(event.keyCode=='13'){
                event.preventDefault();
                this.getSearchData()
                event.target.blur()
            }
        },
        //不使用mock数据
        getSearchData(start,end){
            if(this.search_content!=''){
                this.search_content=''
            }
            if(this.user_cnt==''){
                this.finish=true
                return;
            }
            this.$axios({
                method:'get',
                url:'/store/v0/lib/query/onebox',
                baseURL:'/api',
                params:{
                    s:this.user_cnt,
                    start:start,
                    end:end
                },
                paramsSerializer: function(params) {
                return qs.stringify(params, {arrayFormat: 'brackets'})
                }
            }).then((res)=>{
                if(res.data.count==0){
                    this.finish=true
                }else{
                    this.finish=false
                    this.search_content=res.data.items
                    this.tagShow=false;
                }
            })
        },
        //使用mock数据
        // getSearchData(){
        //     if(this.search_content!=''){
        //         this.search_content=''
        //     }
        //     if(this.user_cnt==''){
        //         this.finish=true
        //         return;
        //     }
        //     this.$axios('ajax/search',{params:{keyword:this.user_cnt}}).then((res)=>{
        //         if(res.data.count==0){
        //             this.finish=true
        //         }else{
        //             this.finish=false
        //             this.search_content=res.data.items
        //             this.tagShow=false;
        //         }
        //     })
        // }
    },
    mounted(){
        if(this.$route.meta.width===null){
            this.screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if(this.screen_width<320){
                this.screen_width=320
            }
        }else{
            this.screen_width=this.$route.meta.width 
        }
        this.search_title=this.$route.meta.title
    }
}
</script>

<style scoped>
.search{
    height:100%;
    overflow:hidden
}
.search-container{
    position:relative;
    height:100%;
}
.search-top{
    height: 44px;
    background: #efeff0;
    border-bottom: 1px solid #ddd;
    position: absolute;
    top:0;
    left:0;
    right:0;
}
.top__back{
    float:left;
    width:42px;
    height:44px;
}
.top__back::before{ 
    content:'';
    display:block;
    margin:15px 0 0 16px;
    width:10px;
    height:16px;
    background:url(../assets/img/back.png) no-repeat;
    background-size:10px;
}
.search-input{
    margin: 5px 20px 5px 42px;
    height:35px;
    position:relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
}
.search-icon{
    width:36px;
    height:35px;
    position:absolute;
    top:0;
    left:0;
    background:url(http://image.read.duokan.com/mfsv2/download/s010/p01TjruXIhgt/PP13pEqhpChuay.png) no-repeat center;
    background-size:16px 16px;
    border-right:1px solid rgba(0,0,0,.1)
}
.search-input input {
    display: block;
    box-sizing: border-box;
    font-size:14px;
    width:100%;
    height:100%;
    border:none;
    padding: 8px 52px 8px 42px;
    color: rgba(0, 0, 0, 0.8);
    background: #fff;
}
.search-container-section{
    position:absolute;
    top:45px;
    left:0;
    right:0;
    bottom:0;
}
.-cnt{
    overflow:auto;   
}
.book-list li:last-child{
    margin-bottom:50px;
}
.search-tag{
    padding:17px;
}
.search-tag .u-tag{
    width: auto;
    line-height: 1.8em;
    display:inline-block;
    border:1px solid #d3d3d3;
    color:#766d5d;
    margin: 0 10px 10px 0;
    font-size:14px;
    border-radius:4px;
    padding: 0 20px;
    
}
.u-book{
    padding:13px 14px;
}
.book-cnt::after{
    clear: both;
    content: '.';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}

.book-cover{
    float:left;
    margin-right:10px;
    position: relative;
    width: 8.5rem;
    height: 11.3rem;
    background-color: #eeece9;
    box-shadow: 0px 6px 5px -3px #aaa;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    overflow: hidden;
}
.book-cover img{
    width:100%;
    height:100%
}
.u-book{
    position: relative;
    overflow: hidden;
}
.u-book .book-info{
    margin-top:1.2rem
}
.book-info .book-title{
    margin-bottom:4px;
    font-size:16px;
    font-weight: 400;
    color:#333;
}
.book-info .book-summary{
    margin: 12px 0 4px;
    font-size: 13px;
    line-height: 1.6em;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 3.2em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.single-line{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search-err{
    font-size:2rem;
    text-align: center;
    margin-top:30px
}
</style>
