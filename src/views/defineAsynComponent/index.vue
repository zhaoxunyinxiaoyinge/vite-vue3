<script lang="ts" setup>
    import axios from "./serve";
    //  const data=await axios();
</script>

<template>
    <div>
        <span v-for="item in data" :key="item.name">{{item.name}}</span>
    </div>
</template>

<style scoped>

</style>
