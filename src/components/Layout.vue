<template>
  <div class="root-height">
      <transition name="route" mode="out-in">
        <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="route-view"></router-view>
        </keep-alive>
      </transition>
      <transition name="route" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" class="route-view"></router-view>
      </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.root-height{
    height:100%;
    position:relative
}
.route-view{
  position:absolute;
  height:100%;
  width: 100%;
}
.route-enter-active{
    transition:all .3s ease;
   -webkit-transition:all .3s ease;
}
.route-leave-active{
   transition:all .2s ease;
   -webkit-transition:all .2s ease;
}
.route-leave-to,.route-enter{
  opacity: 0; 
}

</style>
