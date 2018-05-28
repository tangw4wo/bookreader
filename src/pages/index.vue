<template>
  <div :style="{overflow:'hidden',width:screen_width+'px'}" class="root-height" v-if="indexLoading">
        <index-header @tabSwitch-on="tabSwitch_on" :tab-on="tab_on"></index-header>
        <div :style="tabStyle" class="root-height">
            <div class="container-wrap" :style="{width:screen_width+'px',float:'left'}">
                    <div class="container-scroll" style="top:0" ref="ctscroll">
                            <index-top :data="top" @getScroll="getScrollTop"></index-top>
                            <index-hot :data="hot" @getScroll="getScrollTop"></index-hot>
                            <index-recom :data="recommend" @getScroll="getScrollTop"></index-recom>
                            <index-male :data="male" @getScroll="getScrollTop"></index-male>
                            <index-female :data="female" @getScroll="getScrollTop"></index-female>
                            <index-free :data="free" @getScroll="getScrollTop"></index-free>
                            <index-bottom :data="topic" @getScroll="getScrollTop"></index-bottom>
                    </div>
            </div>
            <div :style="{width:screen_width+'px',float:'left'}">
                            <index-shelf></index-shelf>
            </div>
        </div>
  </div>
</template>

<script>
import indexHeader from "../components/index-header"
import top from "../components/index-top"
import indexRecom from "../components/index-recommend"
import indexHot from "../components/index-hot"
import indexMale from "../components/index-male"
import indexFemale from "../components/index-female"
import indexFree from "../components/index-free"
import indexBottom from "../components/index-bottom"
import indexShelf from "../components/index-shelf"
export default {
  components:{
    indexHeader,
    indexTop:top,
    indexRecom,
    indexHot,
    indexMale,
    indexFemale,
    indexFree,
    indexBottom,
    indexShelf,
  
  },
  data(){
    return{
      screen_width:734,
      indexLoading:false,
      top:{},
      hot:{},
      recommend:{},
      female:{},
      male:{},
      free:{},
      topic:{},
      duration:0,
      position:0,
      tab_width:0,
      tab_on:false,
      isScroll:this.$refs.ctscroll
    }
  },
  methods:{
    getScrollTop(){
      this.$route.meta.scrollTop=this.$refs.ctscroll.scrollTop
    },
    time_lapse(boolean){
      setTimeout(()=>{
        this.tab_on=boolean
      },500)
    },
    tabSwitch_on(data){
      this.duration=.5 
       if(data===0){
         this.position=0
         this.time_lapse(false)
       }else{
         this.position=-this.screen_width
         this.time_lapse(true)
         }
    }
  },
  computed:{
     tabStyle(){
       let  tabStyle={
      width:this.screen_width*2+'px',
      'transition-duration':this.duration+'s',
      transform:'translate3d'+'('+this.position+'px'+','+0+'px'+','+0+'px'+')',
    }
      return tabStyle
    }
  },
  watch:{
    $route(to,from){
      if(to.name=='index'){
          if(this.invid){
            clearInterval(this.invid)
          }
          if(this.$route.meta.scrollTop==0){
            return;
          }
          this.$refs.ctscroll.scrollTop=this.$route.meta.scrollTop
          this.invid=setInterval(()=>{
            this.$refs.ctscroll.scrollTop=this.$route.meta.scrollTop
            if(this.$refs.ctscroll.scrollTop!=0){
              clearInterval(this.invid)
            }
          },0)
      }
    }
  },
  mounted(){
    this.screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(this.screen_width<320){
      this.screen_width=320
    }
    this.$route.meta.width=this.screen_width
    this.$axios.get('/ajax/index').then((res)=>{
        let data =res.data;
        this.indexLoading=true
        this.top=data.items[0].data.data;
        this.hot=data.items[1].data.data;
        this.recommend=data.items[2].data.data;
        this.female=data.items[3].data.data;
        this.male=data.items[4].data.data;
        this.free=data.items[5].data.data
        this.topic=data.items[6].data.data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style>

.container-wrap{
  height: 100%;
  overflow: hidden;
  position:relative;
}
.container-scroll{
  position:absolute;
  top:45px;
  bottom:0px;
  left:0px;
  right:0px;
  overflow-y:scroll;
}
</style>
