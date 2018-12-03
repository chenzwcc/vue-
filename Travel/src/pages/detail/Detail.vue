<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :bannerImgs="bannerImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
        
    </div>
</template>

<script>
import axiso from 'axios'
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
export default {
    name:'Detail',
    components:{
        DetailBanner:DetailBanner,
        DetailHeader:DetailHeader,
        DetailList:DetailList
    },
    data:function(){
        return{
            sightName:'',
            bannerImg:'',
            bannerImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailList(){
            axiso.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.getDetailListSucc)
        },
        getDetailListSucc(res){
            res = res.data
            if(res.ret && res.data){
                console.log(res.data)
                this.sightName=res.data.sightName
                this.bannerImg=res.data.bannerImg
                this.list=res.data.categoryList
                this.bannerImgs  =res.data.gallaryImgs
            }
        }
    },
    mounted:function(){
        this.getDetailList()
    }
}
</script>

<style lang="stylus" scoped>

</style>
