<template>
  <section class="channel-h5">
      <div class="channel-h5__header">
          <p class="channel-h5__title">
              重磅推荐<i>推</i>
          </p>
          <div class="tab">
              <a href="javascript:" :class="{tab__on:tab_on=='male'}" @click="tabChange('male')">男</a>
              <a href="javascript:" :class="{tab__on:tab_on=='female'}" @click="tabChange('female')">女</a>
          </div>
      </div>
      <ul class="list-h5">
          <li v-for="(item,index) in data" :key="index" v-if="index==tabSwitch" @click="goPath">
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
          <li v-for="(item,index) in data" :key="index" v-if="index>tab_noimg_Switch.min && index<tab_noimg_Switch.max" @click="goPath">
              <div class="book-h5 book-h5__no-img">
                  <span class="book-h5_no-img__order">0{{index+1}}</span>
                  <div class="book-h5_no-img__info">
                      <p class="book-h5_no-img__title">
                          {{item.title}}
                      </p>
                  </div>
              </div>
          </li>
      </ul>
  </section>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            tab_on:'male'
        }
    },
    methods:{
        goPath(){
            this.$emit('getScroll')
            this.$router.push({name:'book',query:{id:18218}})
        },
        tabChange(item){
            if(item==this.tab_on){
                return
            }
            this.tab_on=item
        }
    },
    computed:{
        tabSwitch(){
            if(this.tab_on=='male'){
                return 0
            }else{
                return 9
            }
        },
        tab_noimg_Switch(){
            if(this.tab_on=='male'){
                return {min:0,max:9}
            }else{
                return {min:9,max:19}
            }
        }
    }
}
</script>

<style>
.channel-h5{
    background:#fff;
    border-bottom:10px solid #f5f5f5;
    position: relative;
}
.channel-h5__header{
    padding: 15px 13px 14px 13px;
    border-bottom:1px solid #f0f0f0;
    position: relative;
}
.channel-h5__title{
    position: relative;
    font:bold 13px/13px a;
    color:rgba(0,0,0,.9)
}
.channel-h5__title>i{
    position: absolute;
    margin: -1px 0 0 5px;
    padding: 3px 5px 0 5px;
    font:9px/9px a;
    color:#fff;
    background:#53ac7d;
    border-radius:1px;
}
.channel-h5__header .tab{
    position: absolute;
    right: 13px;
    top:9px;
}
.channel-h5__header .tab a{
    position:relative;
    padding: 16px 7px;
    font:12px/12px a;
    color:#999;
}
.channel-h5__header .tab a:after{
    content:'';
    position: absolute;
    top:16px;
    bottom:16px;
    right:0;
    width:1px;
    border-right: 1px solid #ccc;
}
.channel-h5__header .tab a:last-child{
    padding-right: 0px;
}
.channel-h5__header .tab a:last-child:after{
    display: none;
}
.channel-h5__header .tab .tab__on{
    color:#528ae8 !important;
}
.list-h5{
    padding: 0 13px;
}
.list-h5 li{
    padding: 17px 0;
    border-bottom:1px solid #f0f0f0;
}
.list-h5 li:last-child{
    border:none;
}
.list-h5>li{
    cursor: pointer;
}
.book-h5{
    overflow: hidden;
}
.book-h5__cover{
    float:left;
    position:relative;
    width:85px;
    height: 113px;
    background-color:#eeece9;
    border:1px solid #f0f0f0;
    border-radius:1px;
    overflow: hidden;
}
.book-h5 img{
    width: 100%;
    height: 100%;
    border-radius: 1px;
}
.book-h5 .book-h5__finish{
    position:absolute;
    bottom:0;
    width:100%;
    color:#fff;
    padding: 25px 7px 6px;
    font:10px/10px a;
    background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.3));
}
.book-h5 .book-h5__info{
    margin-left:100px;
    padding-top:6px;
    background: #fff;
}
.book-h5__title{
    margin-bottom:4px;
    font:16px/17px a;
    color:rgba(0,0,0,.9);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.book-h5__author{
    margin-top:8px;
    font:12px/12px a;
    color:rgba(0,0,0,.7);
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.book-h5__summary{
    margin:8px 0 0;
    height: 2.8em;
    font:12px/1.4em a;
    color:rgba(0,0,0,.6);
    overflow: hidden;
    text-overflow:ellipsis;
    /* white-space: nowrap; */
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical; 
}
.book-h5__wrap{
    margin: 10px;
    padding-top:3px;
    overflow: hidden; 
}
.book-h5__tag{
    float:left;
    margin: 5px 7px 0 0;
    padding:3px 6px 2px;
    max-width:6em;
    font:10px/11px a;
    color:#53ac7d;
    border:1px solid #53ac7d;
    border-radius:3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.book-h5__tag:last-child{
    margin-right: 0;
}
.book-h5_no-img__order{
    float:left;
    margin-top:1px;
    font:13px/13px a;
    color:rgba(237,83,15,.9)
}
.book-h5_no-img__info{
    margin-left:27px;
}
.book-h5_no-img__title{
    font:15px/15px a;
    color:rgba(0,0,0,.9);
    background:#fff;
}
</style>
