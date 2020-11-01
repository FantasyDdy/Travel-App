<template>
    <div class="search">
        <input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音">
        <div class="search-content" ref='search' v-show='keyword'>
            <ul>
                <li class="sreach-item" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="sreach-item" v-show="hasNoData">没有找到匹配的城市</li>
            </ul>
        </div>
    </div>
</template>

<script>
// 引入better-scroll 来实现搜索列表的滚动
import BScroll from 'better-scroll'
import { mapMutations } from "vuex";

export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null,
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
            // this.$store.commit('changeCity',city);
            this.changeCity(city)
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        keyword(){
            // 因为监听搜索的频率也很高所以我们也要做节流
            if(this.timer){
               clearTimeout(this.timer)
            } 

            // 搜索框为空时，去除搜索到得城市列表
            if(!this.keyword){
                // 因为Vue得data数据是响应式的，把list数组为空<li>就没有数据可循环了
                this.list=[]
                return
            }

            this.timer = setTimeout(() => {
              const result = [];
              // 循环每个字母
              for(let i in this.cities){
                  // 遍历字母中数组匹配数据 (forEach 调用数组的每个元素，并将元素传递给回调函数)
                  this.cities[i].forEach((value)=>{
                      if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                          // 将匹配到的城市数据push到一个数组
                          return result.push(value)
                      }
                  })
              }
              // 将匹配到的数组赋值给list,用于v-for展现list
              this.list = result
           }, 100);
        }
    },
    // 用生命周期钩子，当list列表都挂载完毕时我们创建一个BScroll实例来实现搜索列表的滚动
    mounted(){
        // 给这个Vue组件添加一个scroll属性,scroll属性是BScroll的实例，就可以实现滚动
        this.scroll = new BScroll(this.$refs.search);
    }
}
</script>

<style lang="less" scoped>
    @import '~styles/variables.less';

    .search{
        height: 0.72rem;
        padding: 0 0.1rem;
        background-color: @bgcolor;

        .search-input{
            width: 100%;
            height: 0.62rem;
            line-height: 0.62rem;
            text-align: center;
            border-radius: 0.06rem;
            color: #666666;
            border: none;
            padding: 0 0.1rem;
            box-sizing: border-box;
        }

        .search-content{
            overflow: hidden;
            position: absolute;
            top: 1.58rem;
            left: 0;
            right: 0;
            bottom: 0;
            background: #eeeeee;
            z-index: 1;

            .sreach-item{
                line-height: 0.62rem;
                padding-left: 0.2rem;
                background: #ffffff;
                color: #666666;
            }
            li + li{
                border-top: 1px solid #cccccc;
            }
        }
    }
</style>