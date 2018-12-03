<template>
    <div class="header">
        城市选择
        <div class="header-left">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>    
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang='stylus' scoped>
    @import '../../../assets/styles/varibles'
    .header
        overflow :hidden
        height :.86rem
        line-height :.86rem
        text-align :center
        color :#fff
        background : $bgColor
        font-size :.32rem
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align :center
                font-size: .4rem
                color :#fff
</style>
