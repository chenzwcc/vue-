<template>
    <div>
        <div class="search">
        <input v-model='keyword' class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{cities:Object},
    data:function(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city) //调用store.state的dispatch方法，changeCity为store中的actions中的方法
            this.$router.push('/')
            //alert(city)
        }
    },
    mounted:function(){
        this.scroll = new Bscroll(this.$refs.search)
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword)> -1||
                        value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            },100)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles'
    .search
        height: .72rem
        padding : 0 .1rem
        background :$bgColor
        .search-input
            box-sizing :border-box
            width:100%
            height: .62rem
            padding: 0 .1rem
            line-height L .62rem
            text-align :center
            border-radius : .06rem
            color: #666
    .search-content
        z-index:1
        overflow:hidden
        position:absolute
        top:1.58rem
        left:0
        right :0
        bottom :0
        background :#eee
        .search-item
            line-height :.62rem
            padding-left : .2rem
            background #ffffff
            color :#666
</style>

