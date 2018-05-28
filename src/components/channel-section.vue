<template>
    <section class="channel-group">
        <div class="channel-group__header">
            <h2 class="channel-group_title">{{data.ad_name}}</h2>
        </div>
         <div class="channel-container">
             <ul class="channel-book-list">
                 <li v-for="(item,index) in data.data.data" :key="index" @click="goPath">
                     <div class="channel-book">
                        <div class="channel-book-cnt">
                            <div class="channel-book-cover">
                                <img v-lazy="item.cover" :alt="item.title">
                            </div>
                            <div class="book-info">
                                <h3 class="book-title single-line">{{item.title}}</h3>
                                <p class="book-summary">{{item.summary}}</p>
                                
                            </div>
                            <div class="channel-book-wrap">
                                <div class="book-tag" v-for="(tag,index) in item.tags" :key="index" v-if="index<tagShow">
                                    {{tag}}
                                </div>
                                <p class="book-author single-line -width"><span class="book-author">{{item.authors}}</span></p>
                            </div>
                        </div>
                     </div>
                 </li>
             </ul>
         </div>
    </section>
</template>

<script>
export default {
    props:{
        data:{
            type:Object,
            default:''
        },
        tag:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        goPath(){
            this.$emit('getScroll')
            this.$router.push({name:'book',query:{id:18218}})
        }
    },
    computed:{
        tagShow(){
            if(this.tag){
                return 3
            }else{
                return 99
            }
        }
    }
}
</script>

<style scoped>
.channel-group{
    border-bottom:10px solid #fff;
    background:#fff;
}
.channel-group:last-child{
    margin-bottom:45px;
}
.channel-group__header{
    position:relative;
    padding:10px 14px;
    border-bottom:1px solid #f0f0f0;
    border-left:6px solid #ffab18
}
.channel-group_title{
    font-size:16px;
    font-weight: normal;
    color:#333
}
.channel-book-list>li{
    cursor: pointer;
    border-bottom:1px solid #f0f0f0;
}
.channel-book-list>li:last-child{
    border: none;
}
.channel-book{
    padding:13px 14px;
    position:relative;
    overflow: hidden;
}
.channel-book-cnt:after{
     clear: both;
    content: '.';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}
.channel-book-cover{
    float:left;
    position: relative;
    width: 8.5rem;
    height: 11.3rem;
    background-color: #eeece9;
    margin-right:10px;
    box-shadow:0px 6px 5px -3px #aaa;
    border:1px solid #f0f0f0;
    border-bottom:none;
    overflow: hidden;
}
.channel-book-cover img{
    width:100%;
    height:100%
}
.book-info{
    padding-top:1.2rem
}
.book-title{
    font-size: 16px;
    font-weight: 400;
    color:#333;
}

.book-summary{
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
.book-author{
    margin-top: 4px;
    font-size: 12px;
    color: #8d8d8d;
}
.book-tag{
    float: right;
    border: 1px solid #ddd;
    margin: .2rem -3px 0 0;
    border-radius: 3px;
    line-height: 1;
    padding: 2px;
    -webkit-transform: scale(.8);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 6em;
    font-size: 12px;
    color: #8d8d8d;
}
.single-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
