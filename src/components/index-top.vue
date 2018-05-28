<template>
  <section class="top-home">
      <a href="javascript:" @click="$router.push({name:'search'})">
            <div class="top-home__search">输入书名/作者/关键字</div>
      </a>
      <slider :sliderData="data"></slider>
      <ul class="top-home__btn">
          <li v-for="(item,index) in topHomeBtn" :key="index">
              <a href="javascript:" @click="goPath(item)">
                  <img class="top-home__icon" :src="item.imgSrc" :alt="item.des">
                  <p class="top-home__des">{{item.des}}</p>
              </a>
          </li>
       </ul>
  </section>
</template>

<script>
import slider from "./slider"
export default {
    components:{
        slider
    },
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            topHomeBtn:[
                {
                    name:'female',
                    imgSrc:require('../assets/img/female.png'),
                    des:'女生'
                },
                {
                    name:'male',
                    imgSrc:require('../assets/img/male.png'),
                    des:'男生'
                },
                {
                    name:'category',
                    imgSrc:require('../assets/img/category.png'),
                    des:'分类'
                },
                {
                    name:'rank',
                    imgSrc:require('../assets/img/rank.png'),
                    des:'排行'
                },
                 
            ]

        }
    },
    methods:{
        goPath(item){
            this.$emit('getScroll')
            this.$router.push({name:item.name})
        }
    }
}
</script>

<style>
.top-home{
    background: #fff;
    border-bottom:10px solid #f5f5f5;
    
}
.top-home__search{
    margin: 10px 13px;
    padding: 1px 0 0 30px;
    color:rgba(0,0,0,.4);
    font:11px/33px a;
    background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) no-repeat 8px center;
    background-size:14px;
    border:1px solid #f5f5f5;
    border-radius: 2px;
}
.top-home__btn{
    margin: 14px 0 4px;
    display:-webkit-box;
    width: 100%;
}
.top-home__btn li{
    line-height: 2.4;
    font-size: 12px;
    text-align: center;
    -webkit-box-flex:1;
}
.top-home__icon{
    display:block;
    margin:0 auto;
    height:22px;
    width: 22px;
}
</style>