<template>
    <div>
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hotCities="hotCities" :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axiso from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
    name:"City",
    data:function(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
          CityHeader:CityHeader,
          CitySearch:CitySearch,
          CityList:CityList,
          CityAlphabet:CityAlphabet
    },
    methods:{
        getCityInfo(){
            axiso.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            console.log(res)
            if(res.data.ret && res.data){
                this.cities = res.data.data.cities
                this.hotCities = res.data.data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted (){
        this.getCityInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
