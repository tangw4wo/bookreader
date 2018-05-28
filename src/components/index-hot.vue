<template>
  <section class="channel-h5">
      <div class="channel-h5__header">
          <p class="channel-h5__title">
              本周最火
          </p>
      </div>
      <ul class="list-h5">
          <li v-for="(item,index) in data" :key="index" @click="goPath">
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
  </section>
</template>

<script>
export default {
    props:['data'],
    methods:{
        goPath(){
            this.$emit('getScroll')
            this.$router.push({name:'book',query:{id:18218}})
        }
    }
}
</script>

<style>

</style>
