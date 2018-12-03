<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom" >热门城市</div>
                <div class="button-list" >
                    <div class="button-wrapper" v-for="item in hotCities" :key='item.id' @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key"> <!--ref方便操作dom对象-->
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="inneritem in item" :key="inneritem.id" @click="handleCityClick(inneritem.name)">
                        {{inneritem.name}}
                    </div>
                </div>
            </div>    
            
        </div>    
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{'cities':Object,'hotCities':Array,'letter':String},
    mounted (){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    methods:{
        handleCityClick(city){
            this.$store.dispatch('changeCity',city) //调用store.state的dispatch方法，changeCity为store中的actions中的方法
            this.$router.push('/')
            //alert(city)
        }
    },
    watch:{ //监听页面中letter的变化，变化后立即触发
        letter:function(){
            if(this.letter){
                const element = this.$refs[this.letter] //得到this.letter对应的dom区域(是个列表，)
                this.scroll.scrollToElement(element[0]) //调用滚动函数scroll到点击的区域
            }
            console.log(this.letter)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles'
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height:.54rem
            background:#eee
            padding-left:.2rem
            color:#666
            font-size:.26rem
        .button-list
            overflow:hidden
            padding:.1rem .6rem .1rem .1rem
            .button-wrapper
                float:left
                width:33.33%
                .button
                    margin:.1rem
                    padding:.1rem 0
                    text-align:center
                    border:.02rem solid #ccc
                    border-radius:.06rem      
        .item-list
            .item 
                line-height :.76rem
                padding-left :.2rem
</style>
