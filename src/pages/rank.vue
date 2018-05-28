<template>
    <div class="rank" :style="{width:screen_width+'px'}">
        <common-header :title="$route.meta.title" from="index"></common-header>
        <div class="rank-container" v-if="rank_loading">
            <ul class="rank-list">
                <li v-for="(item,index) in rankData" :key="index" class="rank-list-item">
                    <div class="rank-cnt">
                        <div class="rank-list-cover">
                            <img :src="item.cover" :alt="item.name">
                        </div>
                        <div class="rank-list-info">
                            <p class="rank-list-info_page"  v-for="(des,index) in item.description" 
                            :key="index">
                                <span class="des-num">{{index+1}}</span>
                            {{des}}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
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
            rankData:[],
            screen_width:'',
            rank_loading:false
        }
    },
    methods:{
        getRankdata(){
            this.$axios('ajax/rank').then((res)=>{
                if(res.data.result!=0){
                    return;
                }
                let data = res.data.items
                data.forEach(item => {
                    if(item.description.indexOf('\n')==-1){
                        item.description = item.description.split('、')
                    }else{
                        item.description=item.description.split('\n')
                    }
                });
                this.rankData=data
                this.rank_loading=true;
            })
        },
        setWidth(){
            if(this.$route.meta.width===null){
            this.screen_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if(this.screen_width<320){
                this.screen_width=320
            }
        }else{
            this.screen_width=this.$route.meta.width 
        }
        }
    },
    mounted(){
        this.setWidth()
        this.getRankdata()
    }
}
</script>

<style>
.rank{
    height:100%;
    position:relative;
    overflow:hidden;
}
.rank-container{
    position:absolute;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    overflow:auto;
}
.rank-list-item{
    padding: 12px 0 6px 20px;
    border-bottom: 1px solid #EEE;
    overflow: hidden;
}
.rank-list-cover img{
    width: 100%;
    height:100%
}
.rank-cnt:after{
    clear: both;
    content: '.';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
}
.rank-list-cover{
    width:90px;
    height:90px;
    float:left;
}
.rank-list-info{
    line-height: 26px;
    font-size: 14px;
    margin-left: 108px;
    margin-top: 5px;
    white-space: nowrap;
}
.rank-list-info_page{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.des-num{
    margin-right: 7px;
    color: #777;
}
</style>
