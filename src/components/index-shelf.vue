<template>
<div class="shelf">
    <div class="shelf__top">
        <div class="shelf__switch"></div>
        <a href="javacript:" @click="$router.push({name:'search'})">
            <div class="shelf-search">输入书名/作者/关键字</div>
        </a>
    </div>
    <ul class="book-list">
        <li>
            <div class="u-book">
                <router-link :to="{name:'book',query:{id:18218}}">
                    <div class="book-cover">
                        <img src="http://cover.read.duokan.com/mfsv2/download/s010/p01yfPOuJRok/dQJSYfAnD3AB42.jpg!s">
                    </div>
                </router-link>
                <div class="info">
                    <h3  class="title">盗墓笔记</h3>
                    <p class="author">
                        <span class="author">南派三叔</span>
                    </p>
                    <div class="warp">
                        <p>最新：《后记》</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
export default {

}
</script>

<style>
.shelf__top{
    padding: 10px 20px 0;
}
.shelf__top .shelf-search{
    margin-right:46px;
}
.shelf-search{
    font-size:12px;
    color:#ccc;
    border:1px solid #eee;
    border-radius:4px;
    line-height: 36px;
    background:url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) no-repeat 10px center;
    background-size:14px;
    padding-left:32px;
}
.shelf__switch{
    width:36px;
    height:36px;
    float:right;
    border-radius:4px;
    background:url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01yLF3fEj8l/b7UfAdlfufQKML.png) no-repeat center;
    background-size:16px;
    border:1px solid #eee;

}
.shelf .book-list .u-book{
    padding:13px 20px;
    width:auto;
}
.shelf .book-list .u-book .book-cover{
    float:left;
    margin-right: 10px;
}
.shelf .book-list .u-book .info{
    padding-top:1.2em;
}
</style>
