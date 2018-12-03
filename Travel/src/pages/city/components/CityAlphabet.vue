<template>
    <ul class="list">
        <li 
        class="item" 
        v-for="item in letters" 
        :key="item" 
        :ref="item" 
        @click="handleLetterClick" 
        @touchstart='handleTouchStart' 
        @touchmove='handleTouchMove' 
        @touchend='handleTouchEnd'
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{cities:Object},
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },  
    data () {
        return{
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated:function(){ //性能优化方式一
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText) //e.target.innerText:  表示可以取到鼠标点击到的对象
        },
        handleTouchStart () {
            this.touchStatus=true
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                if(this.timer){  //性能优化方式二：设置timer，增加慢加载
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    //const startY = this.$refs['A'][0].offsetTop //获取A到输入框的距离
                const touchY = e.touches[0].clientY -79 //获取带触碰到的字母到顶部的距离
                const index = Math.floor((touchY-this.startY) / 20) //获取触碰到的字母的索引，（每个字母高度为20）
                if(index >=0 && index < this.letters.length){
                    this.$emit('change',this.letters[index])
                }
                },16)
                
            }
        },
        handleTouchEnd () {
            this.touchStatus=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles'
    .list
        display :flex
        flex-direction :column
        justify-content :center
        position :absolute
        top:1.58rem
        right:0
        bottom :0
        width :.4rem
        .item
            line-height :.4rem
            text-align :center
            color :$bgColor

</style>

