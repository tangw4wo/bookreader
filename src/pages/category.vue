<template>
    <div class="category" :style="{width:screen_width+'px'}">
        <common-header :title="$route.meta.title" from="index"></common-header>
        <main class="category-container" v-if="catecory_loading">
            <section class="male-category">
                <div class="category-title">
                    <em class="category-icon"></em>
                    <h1>网文男频</h1>
                </div>
                 <ul class="category-book-list">
                    <li v-for="(item,index) of male_data" :key="index">
                        <div class="category-book-cnt" :style="{backgroundImage:'url'+'('+item.new_image+'!m'+')'}">
                            <h3>{{item.label}}</h3>
                            <p class="num">{{item.fiction_count}}</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="female-category">
                <div class="category-title">
                    <em class="category-icon"></em>
                    <h1>网文女频</h1>
                </div>
                 <ul class="category-book-list">
                    <li v-for="(item,index) of female_data" :key="index">
                        <div class="category-book-cnt" :style="{backgroundImage:'url'+'('+item.new_image+'!m'+')'}">
                            <h3>{{item.label}}</h3>
                            <p class="num">{{item.fiction_count}}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
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
            male_data:[],
            female_data:[],
            catecory_loading:false,
            screen_width:''
        }
    },
    methods:{
        getUrl(url){
            let img = 'url'+'('+url+'!m'+')'
            return img 
        },
        getCategory_data(){
            this.$axios.get('ajax/category').then((res)=>{
            this.male_data=res.data['male']
            this.female_data=res.data['female']
            this.catecory_loading=true;
        }).catch((err)=>{
            console.log(err)
        })
        }  
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
        this.getCategory_data()
    }
}
</script>

<style>
.category{
    height:100%;
    position: relative;
    overflow: hidden;
}
.category-container{
    margin:0 10px;
    background:#fff;
    position:absolute;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;
}
 .category-title{
     line-height:2.4em;
     margin-top:10px;
     border-bottom:1px solid #eee;
     position:relative;
     box-sizing: border-box;
     color:rgb(153, 155, 156)
 }
 .category-title *{
     vertical-align: middle;
 }
 .category-title h1{
     display:inline-block;
     font-size:15px;
     font-weight: 400;
     margin-left:5px;
     
 }
 .category-icon{
     display:inline-block;
     width: 16px;
     height:16px;
 }
 .category-book-list{
     overflow:hidden;
     margin-bottom:2%;
 }
 .category-book-list li{
     float: left;
     width: 100%;
     margin: 4% 0 0 0;
 }
 .category-book-cnt{
     width: 100%;
     height:66px;
     padding: 21px 6px 0;
     background-color: #eee;
     background-size: 100%;
     background-position: right bottom;
     background-repeat: no-repeat;
     color: #515151;
     box-sizing: border-box;
     -webkit-box-sizing: border-box;
   
 }
 .category-book-cnt h3{
     font-size: 13px;
     line-height: 16px;
 }
 .category-book-cnt .num{
     font-size: 11px;
     line-height: 2em;
     color: #999;
 }
</style>
