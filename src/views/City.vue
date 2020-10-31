<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list 
        :hot-cities='hotCities' 
        :cities='cities'
        :letter = 'letter'
        >
        </city-list>
        <city-alphabet  
        :cities='cities' 
        @change='handleLitterChange'
        ></city-alphabet>
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
            letter:''
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
        },
        handleLitterChange(letter){
            this.letter = letter;
        }
    },
    mounted(){
        this.getCityInfo();  
    }
}
</script>

<style lang="less" scoped>

</style>