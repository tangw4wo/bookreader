<template>
   <section class="channel-h5">
      <div class="channel-h5__header">
          <p class="channel-h5__title">
              男生最爱
          </p>
      </div>
      <div>
          <div>
            <ul class="list-h5">
                <li v-for="(item,index) in data" :key="index" v-if="index>=numChange.min && index<numChange.max" @click="goPath">
                <div class="book-h5">
                    <div class="book-h5__cover">
                        <img v-lazy="item.cover" :alt="item.title">
                        <p class="book-h5__finish">完结</p>
                    </div>
                    <div class="book-h5__info">
                        <p class="book-h5__title">{{item.title}}</p>
                        <p class="book-h5__author">{{item.authors}}</p>
                        <p class="book-h5__summary">{{item.summary}}</p>
                        <div class="book-h5__wrap">
                            <div class="book-h5__tag" v-for="(tag,index) in item.tags" :key="index">{{tag}}</div>
                        </div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
        <div class="channel-h5__footer_next">
            <a href="javascript:" @click="setnum">换一换</a>
            <a href="javascript:" @click="goMale">男生频道</a>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            pageNum:1
        }
    },
    methods:{
        setnum(){
            if(this.pageNum==3){
                this.pageNum=1
                return;
            }
            this.pageNum+=1
        },
        goPath(){
            this.$emit('getScroll')
            this.$router.push({name:'book',query:{id:18218}})
        },
        goMale(){
            this.$emit('getScroll')
            this.$router.push({name:'male'})
        }
    },
    computed:{
        numChange(){
            if(this.pageNum==1){
                return {min:0,max:5}
            }else if(this.pageNum==2){
                return {min:5,max:10}
            }else{
                return {min:10,max:15}
            }
        }
    }
}
</script>

<style>
.channel-h5__footer_next{
    border-top:1px solid #f0f0f0;
    overflow: hidden;
}
.channel-h5__footer_next>a{
    float:left;
    width: 50%;
    padding:14px;
    font:13px/1.3em a;
    color:rgba(0,0,0,.9);
    text-align: center;
    box-sizing: border-box;
}
.channel-h5__footer_next > a:first-child{
    border-right:1px solid #f0f0f0
}
</style>
