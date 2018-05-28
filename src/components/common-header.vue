<template>
  <div class="top">
      <a class="top__back"  href="javascript:" @click="gotoName"></a>
      <span class="top__title">{{title}}</span>
      <a class="header-home"  href="javascript:" @click="goIndex"></a>
  </div>
</template>

<script>
export default {
    props:['title','from'],
    data(){
        return{
            time:true
        }
    },
    methods:{
        gotoName(){
            if(!this.time){
                return;
            }   
            this.time=false
            this.$router.push({name:this.from})
            setTimeout(()=>{
                this.time=true
            },1000)
            
        },
        goIndex(){
            if(!this.time){
                return;
            }   
            this.time=false
            this.$router.push({name:'index'})
            setTimeout(()=>{
                this.time=true
            },1000)
        }
    }
}
</script>

<style>
.top{
    position:relative;
    height:44px;
    border-bottom:1px solid #ddd;
    font:15px/45px a;
    color:rgba(0,0,0,.7);
    background:#efeff0;
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
.header-home{
    float:right;
    width:44px;
    height:44px;
    background:url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01eZH42sBV7/QTS90E2ZVritaa.png) no-repeat center;
    background-size:16px;
}
</style>
