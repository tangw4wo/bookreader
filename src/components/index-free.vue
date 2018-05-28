<template>
    <section class="channel-group">
        <div class="channel-group__header">
            <h2 class="channel-group_title">限时免费</h2>
        </div>
        <ul class="book-table">
            <li v-for="(item,index) in data" :key="index" @click="goPath">
                <div class="u-book">
                    <div class="book-cover">
                        <img :alt ="item.ad_name" v-lazy="item.data.cover">
                        <div class="u-tagRT -freefiction"></div>
                    </div>
                    <div class="info">
                        <h3 class="title">{{item.ad_name}}</h3>
                    </div>
                </div>
            </li>
        </ul>
        <a href="javacript:" class="channel-group__footer">更多限免佳作&gt;&gt;</a>
    </section>
</template>

<script>
export default {
   props:['data'],
   methods:{
       goPath(){
           this.$emit('getScroll')
           this.$router.push({name:'book',query:{id:18218}})
       }
   }
}
</script>

<style>
.channel-group{
    position:relative;
}
.channel-group__header{
    position:relative;
    padding:10px 14px;
    border-bottom:1px solid #f0f0f0;
    border-left:6px solid #ffab18
}
.channel-group_title{
    font-size:16px;
    font-weight: normal
}
.book-table{
    padding:13px 14px 5px;
    font-size:0;
}
.book-table li{
    width:33.3%;
    display: inline-block;
    vertical-align: top;
    line-height: 1;
    margin-bottom:8px;
    cursor: pointer;
}
.channel-group .u-book{
    width:86px;
    position:relative;
    overflow:hidden;
}
.book-cover{
    position:relative;
    width:86px;
    height:113px;
    background-color:#eeece9;
    box-shadow:0px 6px 5px -3px #aaa;
    border:1px solid #f0f0f0;
    overflow:hidden;
    border-bottom:none;
}
.book-cover img{
    width:100%;
    height:100%
}
.info{
    padding-top:8px;
}
.title{
    font-size:13px;
    line-height:1.4em;
    max-height:2.8em;
    overflow:hidden;
    color:#8d8d8d;
    margin-bottom:8px;
    font-weight: 400
}
.u-tagRT{
    position:absolute;
    top:0;
    right:0;
    line-height: 1.4;
    background-color:#ef6c2c;
    color:#fff;
    width:100%;
    font-size:1.4rem;
    text-align: center;
    -webkit-transform-origin:top center;
    -webkit-transform:translateX(50%) rotate(45deg)
    translateY(50%) scale(.8)
}
.u-tagRT,.-freefiction{
    background-color:#49ab3f;
}.u-tagRT,.-freefiction:before{
    content:'\9650\514d'
}
.channel-group__footer{
    display: block;
    border-top:1px solid #f0f0f0;
    text-align:center;
    font-size:14px;
    padding:19px 0;
}
</style>
