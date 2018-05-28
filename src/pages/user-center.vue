<template>
    <div class="user-center" :style="{width:screen_width+'px'}">
        <common-header :title="$route.meta.title" from="index"></common-header>
        <transition name="anima">
            <div class="task-animation" v-for="(item,index) in anima" :key="index">+ 500书币</div>
        </transition>
        <div class="user-center-container">
            <div class="task-page">
                <ul class="task-list">
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/fdsc3/p017rdZTB65K/pDJrF2XCYRGKRP.png">
                            </div>
                            <div class="task-info">
                                <h3>每日签到</h3>
                                <p>每天签到都有奖，连续7天抽大奖</p>
                            </div>
                            <div class="task-btn">
                                <p @click="task_over('task1')" :class="{btnChange:taskList['task1'].status}">{{taskList['task1'].text}}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p013RMsIOqyv/sGIEbajzOxoxwT.png">
                            </div>
                            <div class="task-info">
                                <h3>新人大礼<em class="coin">送500书币</em></h3>
                                <p>新用户立刻获赠500书币大礼包，马上去领取吧 !</p>
                            </div>
                            <div class="task-btn">
                                <p @click="task_over('task2')" :class="{btnChange:taskList['task2'].status}">{{taskList['task2'].text}}</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png">
                            </div>
                            <div class="task-info">
                                <h3>5元充值</h3>
                                <p>充值5元获得500书币</p>
                            </div>
                            <div class="task-btn">
                                <p>充值</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png">
                            </div>
                            <div class="task-info">
                                <h3>10元充值</h3>
                                <p>充值10元获得1000书币</p>
                            </div>
                            <div class="task-btn">
                                <p>充值</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png">
                            </div>
                            <div class="task-info">
                                <h3>20元充值</h3>
                                <p>充值20元获得2000书币</p>
                            </div>
                            <div class="task-btn">
                                <p>充值</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png">
                            </div>
                            <div class="task-info">
                                <h3>50元充值</h3>
                                <p>充值50元获得5000书币</p>
                            </div>
                            <div class="task-btn">
                                <p>充值</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="task-cnt">
                            <div class="task-icon">
                                <img src="http://image.read.duokan.com/mfsv2/download/s010/p01A6KoaXKfp/G6lr8GUkpcJIn1.png">
                            </div>
                            <div class="task-info">
                                <h3>100元充值</h3>
                                <p>充值100元获得10000书币</p>
                            </div>
                            <div class="task-btn">
                                <p>充值</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <p class="user-footer">1元=100书币，充值任务赠送的书币半年后失效。</p>
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
        return {
            taskList:{
                task1:{status:false,text:'签到'},
                task2:{status:false,text:'领取'}
                },
            anima:[],
            screen_width:''    
        }
    },
    methods:{
        task_over(item){
            this.taskList[item].status=true;
            if(this.taskList[item].text=='签到'){
                this.taskList[item].text='已签到';
            }else{
                this.anima[0]='1'
                setTimeout(()=>{
                    this.anima=[]
                },50)
                this.taskList[item].text='已领取';
            }
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
    }
}
</script>

<style>
.user-center{
    height:100%;
    overflow: hidden;
    position:relative;
}
.user-center-container{
    position:absolute;
    top:45px;
    left:0;
    right:0;
    bottom:0;
    overflow: auto;
}
.task-list>li{
    position: relative;
    padding: 0 15px;
    color: #6b3416;
    overflow: hidden;
}
.task-cnt{
    margin-top:20px;
    position:relative;
    border-bottom:1px solid #eee;
}
.task-icon{
    width:36px;
    height:36px;
    float:left;
    margin-top:5px;
}
.task-icon img{
    width: 100%;
    height:100%;
}
.task-info{
    margin: 1.5rem 7rem 1.5rem 4rem;
}
.task-info h3{
    position: relative;
    margin-bottom: 3px;
    font-size: 14px;
}
.task-info p{
    position: relative;
    font-size: 12px;
    width: 90%;
}
.task-btn{
    float:right;
}
.task-info .coin{
    background-image: url(http://image.read.duokan.com/mfsv2/download/s010/p01hW6qWoijj/3W1gVesrl2Td6w.png);    
    position: relative;
    padding-left: 24px;
    color: #ff9c00;
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: -3px;
    margin-left:10px;
}
.task-btn p{
    position: absolute;
    top: 50%;
    right: 0;
    padding: 6px 0;
    line-height: 1;
    width: 6rem;
    box-sizing: border-box;
    border-radius: .4rem;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: #ff9c00;
    -webkit-transform: translateY(-85%) translateZ(0);
}
.btnChange{
    background-color:#888!important;
}
.user-footer{
    padding: 20px 0 10px;
    font-size: 12px;
    text-align: center;
    color: #888;
}
.task-animation{
    position: absolute;
    top:30%;
    left: 50%;
    width: 10rem;
    font-size:18px;
    padding: 5px 10px;
    border:1px solid #eee;
    color:#ff9c00;
    background:#fff;
    border-radius:5px;
    -webkit-transform: translateX(-50%) translateZ(0);
    z-index:12000;
}
.anima-leave-active{
    transition:all 1.5s ease;
}
.anima-leave-to{
    transform: translateY(-200%) translateX(-50%);
    opacity: 0;
}
</style>
