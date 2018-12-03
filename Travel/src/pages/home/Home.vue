<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList = "swiperList"></home-swiper>
        <home-icon :iconList='iconList'></home-icon>
        <home-recommend :recommendList='recommendList'></home-recommend>
        <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeRecommend from './components/HomeRecommend'
import HomeWeekend from './components/HomeWeekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:'Home',
    components:{
        HomeHeader:HomeHeader,
        HomeSwiper:HomeSwiper,
        HomeIcon:HomeIcon,
        HomeRecommend:HomeRecommend,
        HomeWeekend:HomeWeekend
    },
    data:function(){
        return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            lastCity:''
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            console.log(res)
            res = res.data
            if(res.ret&&res.data.city){
                this.swiperList = res.data.swiperList
                this.iconList = res.data.iconList
                this.recommendList = res.data.recommendList
                this.weekendList = res.data.weekendList
            }
            
        }
    },
    mounted(){
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated(){ //router-view使用了<keep-alive></keep-alive>才能使用该函数
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style>

</style>

