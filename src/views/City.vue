<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'

export default {
    name:'City',
    data(){
        return{
            
        }
    },
    components:{
        CityHeader,
        CitySearch,
    }
}
</script>

<style lang="less" scoped>

</style>