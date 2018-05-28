<template>
  <div v-if="bookLoading" :style="{width:screen_width+'px'}">
      <common-header :title="bookData.item.title" :home="true" :from="from"></common-header>
      <div class="container-scroll" :style="{width:screen_width+'px'}">
          <div class="book-page">
              <section class="main-card" style="border-bottom:none">
                  <div class="cnt-u-book -detail">
                      <div class="book-cover">
                          <img :src="bookData.item.cover" :alt="bookData.item.title">
                      </div>
                      <div class="info">
                          <h3 class="title">{{bookData.item.title}}</h3>
                          <p class="author">
                              <span class="author">{{bookData.item.authors}}</span>
                          </p>
                          <div class="u-grade">
                              <span class="read">{{bookData.item.score_count}} 个评价</span>
                          </div>
                          <p class="price">价格: {{bookData.item.price}}书币/千字</p>
                          <p class="count">字数:{{bookData.item.word_count}}字
                              <span class="u-booktag -serial">连载中</span>
                          </p>
                      </div>
                  </div>
              </section>
              <section class="main-card">
                  <div class="book-dash">
                      <div class="wrap">
                          <ul class="btn-group">
                              <li class="u-btn2" @click="$router.push({name:'reader'})">
                                  <span class="book-dash-text"></span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="u-folder">
                      <div class="folder-cnt">
                          {{bookData.item.content}}
                      </div>
                      <div class="folder-tail">
                          <div>最新：{{bookData.item.latest}}</div>
                      </div>
                  </div>
              </section>
              <section class="main-card">
                  <div class="u-folder">
                      <div class="folder-top">
                          <h3>类别标签</h3>
                      </div>
                      <div class="folder-cnt">
                          <ul class="m-tag -color">
                              <li class="u-tag" v-for="(item,index) in bookData.item.tags" :key="index">
                                  {{item}}
                              </li>
                          </ul>
                      </div>
                  </div>
              </section>
              <section class="main-card">
                  <div class="u-title">
                      <h1>作者的其他图书</h1>
                  </div>
                  <div class="cnt">
                      <ul class="cnt-book-table">
                          <li v-for="(item,index) in bookData.author_books" :key="index">
                              <div class="cnt-u-book -vertical">
                                  <div class="book-cover">
                                      <img :src="item.cover" :alt="item.title">
                                  </div>
                                  <div class="info">
                                    <h3 class="title">{{item.title}}</h3>
                                    </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </section>
              <section class="main-card">
                  <div class="u-title">
                      <h1>喜欢本书的人也喜欢</h1>
                  </div>
                  <div class="cnt">
                      <ul class="cnt-book-table">
                          <li v-for="(item,index) in bookData.related" :key="index">
                              <div class="cnt-u-book -vertical">
                                  <div class="book-cover">
                                      <img :src="item.cover" :alt="item.title">
                                  </div>
                                  <div class="info">
                                    <h3 class="title">{{item.title}}</h3>
                                    </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </section>
              <section class="main-card -folder">
						<div class="u-title">
							<h1>图书信息</h1>
						</div>
						<div class="cnt">
							<ul class="text">
								<li>版权：{{bookData.item.rights}}</li>
							</ul>
						</div>
			  </section>
          </div>
      </div>
  </div>
</template>
<script>
import commonHeader from "../components/common-header"
export default {
    components:{
        commonHeader
    },
    data(){
        return{
            screen_width:'',
            bookLoading:false,
            bookData:'',
            id:'',
            from:this.$route.meta.pathName || 'index'
        }
    },
    mounted(){
        if(this.$route.meta.width===null){
            this.screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }else{
            this.screen_width=this.$route.meta.width 
        }
        this.id=this.$route.query.id;
        this.$axios.get('ajax/book',{params:{id:this.id}}).then((res)=>{
        this.bookData=res.data;
        this.bookLoading=true;
        }).catch((err)=>{console.log(err)})
        }
    }    
</script>

<style scoped>
.main-card{
    border-bottom:10px solid #f5f5f5;
}
.main-card .-folder { padding-bottom:1px;}
.main-card .-folder .cnt{
    margin-bottom:12px;
}
.main-card>.cnt,.main-card .list li {
    padding-left:14px;
    padding-right:14px;
}
.u-title {
    margin-bottom:8px;
    padding-top:15px;
    padding-left:14px;
    padding-right:14px;
    font-size:15px;
    color:#8d8d8d;
}
.cnt-u-book{
    position:relative;
    overflow:hidden;
}
.cnt-u-book.-detail{
    padding: 40px;
    display:table;
    width:100%;
    box-sizing: border-box;
}
.cnt-u-book.-detail .book-cover{ width:100px;height:134px; }
.cnt-u-book.-detail .author{ color:#4b99a7 }
.cnt-u-book.-detail .author>span{
    display:inline-block;
    margin-right:5px;
}
.cnt-u-book.-detail .title{
    margin-bottom:13px;
    font-size:16px;
}
.cnt-u-book.-detail .info{
    padding:0 0 0 14px;
    display:table-cell;
    vertical-align: middle;
}
.cnt-u-book.-vertical{ width:86px;}
.cnt-u-book.-vertical .title{
    font-size:13px;
    line-height:1.4em;
    max-height:2.8em;
    overflow:hidden;
    color:#8d8d8d;
    margin-bottom:0px;
    text-align:left;
}
.cnt-u-book.-vertical .book-cover{
    float:none;
    height:113px;
    width:86px;
}
.cnt-u-book.-vertical .info{
    margin-left:0px;
    padding-top:8px; 
}
.book-cover{
    position:relative;
    background:#eeece9;
    box-shadow:0 6px 5px -3px #aaa;
    border:1px solid #f0f0f0;
    border-bottom:none;
    overflow:hidden;
}
.book-cover img{
    width:100%;
    height:100%;
}
.u-booktag{
    margin-left:3px;
    border:1px solid #00a0e9;
    border-radius:4px;
    font-size:12px;
    line-height:16px;
    display:inline-block;
    padding: 0 2px;
}
.u-booktag.-serial{
    color:#63bd6e;
    border-color:#63bd6e;
}
.book-dash .wrap{
    padding:0 14px;
    margin:0 0 27px;
}
.book-dash-text:after{
    content:'\5f00\59cb\9605\8bfb';

}
.btn-group{
    width:100%;
    font-size:0;
    white-space: nowrap;
}
.btn-group li {
    display:inline-block;
    width:49%;
}
.btn-group li:only-child{
    width:100%
}
.btn-group li:first-child{
    margin-right:2%
}
.u-btn2{
    display:block;
    height:2.8em;
    line-height:2.8em;
    text-align:center;
    border-radius:4px;
    font-size:14px;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    background:#f35d02;
    border:1px solid #e35109;
    color:#fff;
    padding:0 10px;    
}
.u-folder>.folder-cnt{
    position:relative;
    line-height:1.6;
    padding:0 14px;
    margin-bottom:10px;
    font-size:14px;
    color:#585858;
}
.u-folder>.folder-tail{
    text-align:center;
    font-size:14px;
    border-top:1px solid #f0f0f0;
    color:#8d8d8d;
}
.u-folder>.folder-top{
    font-size:16px;
    font-weight: normal;
    color:#8d8d8d;
    padding:14px 14px 8px;
}
.m-tag{
    line-height:1;
    overflow:hidden;
}
.m-tag.-color .u-tag:nth-child(3n+1){
    background-color:#fbebe8;
}
.m-tag.-color .u-tag:nth-child(3n+2){
    background-color:#fbebe8;
}
.m-tag.-color .u-tag:nth-child(3n+3){
    background-color:#fbebe8;
}

.m-tag .u-tag{
    margin:0 10px 5px 0;
    display:inline-block;
    width:auto;
    line-height:1.8em;
    padding:0 20px;
    color:#766d5d;
    border-radius:4px;
    background:#909da8;
    font-size:14px;
    text-align:center;
    border:1px solid #d3d3d3;
}
.cnt .cnt-book-table{font-size:0}
.cnt .cnt-book-table li>*{display:inline-block}
.cnt .cnt-book-table li{
    width:33.3%;
    display:inline-block;
    vertical-align:top;
    line-height:1;
    margin-bottom:8px;
}
.cnt .cnt-book-table li:nth-child(3n+1){
    text-align:left;
}
.cnt .cnt-book-table li:nth-child(3n+2){
    text-align:center;

}
.cnt .cnt-book-table li:nth-child(3n+3){
    text-align:right;

}
</style>
