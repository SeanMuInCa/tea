<template>
    <div class="tabbar">
        <ul>
            <li @click="router.push('/')">
                <HomeFilled style="width: 1rem; height: 1rem; " />
                <span>Home</span>
            </li>
            <li @click="router.push('/list')">
                <House style="width: 1rem; height: 1rem; "/>
                <span>Home</span>
            </li>
            <li @click="router.push('/cart')">
                <House style="width: 1rem; height: 1rem; " />
                <span>Home</span>
            </li>
            <li @click="router.push('/profile')">
                <House style="width: 1rem; height: 1rem; " />
                <span>Home</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

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