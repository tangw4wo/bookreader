<template>
  <div class="slider-banner">
      <div v-for="(item,index) in sliderData" :key="index" v-if="index==0">
          <a :href="item.reference_id">
              <img class="cover" :src="item.ad_pic_url" :alt="item.ad_name">
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        sliderData:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style>
.slider-banner .cover{
    width: 100%;
}
</style>
