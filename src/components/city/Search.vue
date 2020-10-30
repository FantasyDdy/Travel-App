<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {

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
    }
</style>