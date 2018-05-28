<template>
  <section class="channel-h5">
      <div class="channel-h5__header">
          <p class="channel-h5__title">
              女生最爱
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
            <a href="javascript:" @click="goFemale">女生频道</a>
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
        goFemale(){
            this.$emit('getScroll')
            this.$router.push({name:'female'})
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
    },
    mounted(){
        console.log(this.data)
    }
}
</script>

<style>

</style>
