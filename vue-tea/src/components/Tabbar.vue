<template>
    <div class="tabbar">
        <ul>
            <li>
                <House style="width: 2em; height: 2em; margin-right: 8px" />
                <span>Home</span>
            </li>
            <li>
                <House style="width: 2em; height: 2em; margin-right: 8px" />
                <span>Home</span>
            </li>
            <li>
                <House style="width: 2em; height: 2em; margin-right: 8px" />
                <span>Home</span>
            </li>
            <li>
                <House style="width: 2em; height: 2em; margin-right: 8px" />
                <span>Home</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

</script>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tabbor'
}
</script>
<style scoped lang="scss">
.tabbar{
    width: 100vw;
    height: 2rem;
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
        }
    }
}
</style>