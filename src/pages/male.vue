<template>
    <div class="female"  :style="{width:screen_width+'px'}">
        <common-header :title="$route.meta.title" from="index"></common-header>
        <div class="female-container" ref="malescroll" v-if="maleDataloding">
            <channel-tpl :data="concern" :tag="tag" @getScroll="getScrollTop"></channel-tpl>
            <channel-tpl :data="recommend" :tag="tag" @getScroll="getScrollTop"></channel-tpl>
            <channel-tpl :data="newbook" :tag="tag" @getScroll="getScrollTop"></channel-tpl>
            <channel-tpl :data="finish" :tag="tag" @getScroll="getScrollTop"></channel-tpl>
        </div>
</div>
</template>

<script>
import commonHeader from "../components/common-header"
import channelTpl from "../components/channel-section"
export default {
    components:{
        commonHeader,
        channelTpl
    },
    data(){
        return{
            screen_width:'',
            concern:{},
            recommend:{},
            newbook:{},
            finish:{},
            maleDataloding:false,
        }
    },
    computed:{
        tag(){
            if(this.screen_width<734){
                return true
            }else{
                return false
            }
        }
    }
    ,
    watch:{
    $route(to,from){
      if(to.name=='male'){
        this.$refs.malescroll.scrollTop=this.$route.meta.scrollTop
      }
    },
  },
    methods:{
        getScrollTop(){
            this.$route.meta.scrollTop=this.$refs.malescroll.scrollTop
        },
        getfemaleData(){
            this.$axios.get('ajax/male').then((res)=>{
                this.concern=res.data.items[0]
                this.recommend=res.data.items[1]
                this.newbook=res.data.items[2]
                this.finish=res.data.items[3]
                this.maleDataloding=true
            }).catch((err)=>{console.log(err)})
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

        this.getfemaleData()
    }
}
</script>

<style>
.female{
    height:100%;
    position: relative;
    overflow: hidden;
}
.female-container{
    height:100%;
    position: absolute;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;
}
</style>
