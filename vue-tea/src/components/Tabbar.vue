<template>
    <div class="tabbar">
        <ul>
            <li v-for="(item,index) in routes" :key="index" @click="switchPage(item.path)" :class="(router.currentRoute.value.fullPath === item.path) ? 'select' : ''">
                <el-button :icon="(router.currentRoute.value.fullPath === item.path) ? item.selected : item.icon" type="" circle  size="large"></el-button>
                <span>{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
const switchPage = (path:any) => {
    router.replace(path);
}
const routes = [
    {
        title:'Home',
        icon:'House',
        selected:'HomeFilled',
        path:'/'
    },
    {
        title:'Category',
        icon:'Document',
        selected:'List',
        path:'/list'
    },
    {
        title:'Cart',
        icon:'ShoppingTrolley',
        selected:'ShoppingCartFull',
        path:'/cart'
    },
    {
        title:'Profile',
        icon:'User',
        selected:'UserFilled',
        path:'/profile'
    }
]
</script>
<!-- <script lang="ts">
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tabbor'
}
</script> -->
<style scoped lang="scss">
.tabbar{
    width: 100vw;
    height: 1.5rem;
    background-color: red;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: white;
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                font-size: .4rem;
            }
            &.select{
                background-color: skyblue;
                color:red;
            }
        }
    }
}
</style>