<template>
  <section class="banner-h5">
      <div class="channel-h5__header">
          <p class="channel-h5__title">
              精选专题 <i>热</i>
          </p>
      </div>
      <ul class="banner-h5__list">
          <div>
            <li v-for="(item,index) in data" :key="index">
                <div class="banner-h5__cover">
                    <img v-lazy="item.ad_pic_url" class="cover" :alt="item.ad_name">
                </div>
            </li>
          </div>
      </ul>
      <div class="channel-h5__footer">
          <a href="" class="btn-h5__more">更多精彩专题&gt;&gt;</a>
      </div>
  </section>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>
.banner-h5{
    margin-bottom:45px;
}
.banner-h5__list {
    padding: 13px 13px 0px;
}

.banner-h5__list > div {
    margin: 0 -3px -3px;
    overflow: hidden;
}

.banner-h5__list li {
    float: left;
    width: 50%;
    margin-bottom: 16px;
    padding: 0 3px;
    box-sizing: border-box;
    cursor: pointer;
}

.banner-h5__cover {
    position: relative;
    padding-bottom: 60.6%;
    border: 1px solid #f0f0f0;
    border-radius: 1px;
}
.banner-h5__cover img {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 1px;
}
.channel-h5__footer {
    display: block;
    padding: 14px 0;
    font: 13px/1.3em a;
    border-top: 1px solid #f0f0f0;
    text-align: center;
}
.cover{
    width:100%;
}

</style>
