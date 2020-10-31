<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hot-cities='hotCities' :cities='cities'></city-list>
        <city-alphabet  :cities='cities'></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'

export default {
    name:'City',
    data(){
        return{
            // city:'',
            hotCities:[],
            cities:{}, 
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            const resData = res.data
            if(resData.ret && resData.data){
                const data = resData.data;
                this.hotCities = data.hotCities;
                this.cities = data.cities;
            }
        }
    },
    mounted(){
      this.getCityInfo();  
    }
}
</script>

<style lang="less" scoped>

</style>