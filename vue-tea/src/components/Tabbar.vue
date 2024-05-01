<template>
    <div class="tabbar">
        <ul>
            <li @click="toHome">
                <House style="width: 1rem; height: 1rem; " v-show="!isHome"/>
                <HomeFilled style="width: 1rem; height: 1rem; " v-show="isHome"/>
                <span>Home</span>
            </li>
            <li @click="toList">
                <Document style="width: 1rem; height: 1rem; " v-show="!isList"/>
                <List style="width: 1rem; height: 1rem; " v-show="isList"/>
                <span>Category</span>
            </li>
            <li @click="toCart">
                <ShoppingTrolley style="width: 1rem; height: 1rem; " v-show="!isCart"/>
                <ShoppingCartFull style="width: 1rem; height: 1rem; " v-show="isCart"/>
                <span>Cart</span>
            </li>
            <li @click="toProfile">
                <User style="width: 1rem; height: 1rem; " v-show="!isProfile"/>
                <UserFilled style="width: 1rem; height: 1rem; " v-show="isProfile"/>
                <span>Profile</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import{ref} from 'vue';
const isHome = ref(true);
const isList = ref(false);
const isCart = ref(false);
const isProfile = ref(false);
const toHome = () => {
    
    isHome.value = true;
    isCart.value = false;
    isList.value = false;
    isProfile.value = false;
    router.push('/');
}
const toList = () => {
    
    isHome.value = false;
    isCart.value = false;
    isList.value = true;
    isProfile.value = false;
    router.push('/list');
}
const toCart = () => {
    
    isHome.value = false;
    isCart.value = true;
    isList.value = false;
    isProfile.value = false;
    router.push('/cart');
}
const toProfile = () => {
    
    isHome.value = false;
    isCart.value = false;
    isList.value = false;
    isProfile.value = true;
    router.push('/profile');
}
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
        }
    }
}
</style>