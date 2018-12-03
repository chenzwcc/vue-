<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item in swiperList' :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
export default {
    name:'HomeSwiper',
    data:function(){
        return{
            swiperOption:{
                pagination: '.swiper-pagination',
                loop: true, //作用是：让轮播可以左右拖动，
                autoplay: 2000,//作用是：让轮播循环自动播放，
                disableOnInteraction: false//作用是：让轮播循环自动播放，
                
            },
            
        }
    },
    props:{"swiperList":Array}
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>

