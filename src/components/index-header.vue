<template>
  <header class="header-tap">
          <div class="Swipe-tab Swipe-tab_2 f-cb">
              <a href="javascript:" :class="{'Swipe-tab__on':!tabOn}" @click="tabSwitch(0)" ref="swipeTab">书城</a>
              <a href="javascript:" @click="tabSwitch(1)" :class="{'Swipe-tab__on':tabOn}">书架</a>
              <i :style="headerTabStyle"></i>
          </div>
        <em class="header-user"  @click="$router.push({name:'usercenter'})"></em>
        <em class="header-checkin"></em>
    </header>     
</template>

<script>
export default {
  props:{
    tabOn:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
        header_position:0,
        header_duration:0,
        swipetab_width:'',
    }
  },
  computed:{
    headerTabStyle(){
          let tabStyle={
          width:this.swipetab_width+'px',
          'transition-duration':this.header_duration+'s',
          transform:'translate3d'+'('+this.header_position+'px'+','+0+'px'+','+0+'px'+')',
        }
        return tabStyle
      }
  },
  methods:{
    goName(){
      console.log('生效了没啊')
    },
    tabSwitch(item){
      this.header_duration=.5
      item===0 ?this.header_position=0 :this.header_position=this.swipetab_width
      this.$emit('tabSwitch-on',item)
    }
  },
  mounted(){
      this.swipetab_width=this.$refs.swipeTab.offsetWidth
  }
}

</script>

<style>
.header-tap{
  padding: 0 90px;
  text-align: center;
  line-height: 44px;
  background: #efeff0;
  border-bottom:1px solid #ddd;
  position: relative;
}
.header-tap i {
  bottom:-1px;
}
.header-tap i:before{
  content: '';
  display: block;
  height: 2px;
  width: 34px;
  margin: 0 auto;
  background: #777;
}
.header-user{
  position: absolute;
  right: 0px;
  top:0px;
  width:44px;
  height: 44px;
  background: url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01j041d5DOT/boUg2EJlVetOMC.png) no-repeat center;
  background-size: 16px;
  cursor: pointer;
}
.header-checkin{
  position: absolute;
  left:0px;
  top:0px;
  width:44px;
  height:44px;
  background: url(http://image.read.duokan.com/mfsv2/download/s010/p01O5K5DzsAZ/2ZODzjwkRQh7l3.png) no-repeat center;
  background-size:22px;
}
.Swipe-tab{
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.Swipe-tab i{
  position: absolute;
  left:0;
  -webkit-transtion:-webkie-transform .3s ease-out;
}
.Swipe-tab a {
  float:left;
  text-align: center;
  /* 解决某些浏览器点击显示高亮 */
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.Swipe-tab_2 a {
  width: 50%;
}
.f-cb:after{
  content:'';
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.Swipe-tab__on{
    color:#ff6600;
    
}
</style>
