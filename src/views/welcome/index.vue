<template>
  <Fragment>
    <div ref="container"  id="container" ></div>
  </Fragment>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as Highcharts from "highcharts";
import * as Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);

const height=ref(0);

const initChart = () => {
Highcharts.chart('container', {
    chart:{
        style:{
            fontSize:'22px',
            fontWeight:'bold',
            color:'#000'
        },
        type:'bar'
    },

    title: {
        text: '阶梯型直线图'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [1, 2, 3, 4, null, 6, 7, null, 9],
        step: 'right', // 连接线转折对齐
        name: 'Right'
    }, {
        data: [5, 6, 7, 8, null, 10, 11, null, 13],
        step: 'center', // 连接线转折对齐
        name: 'Center'
    }, {
        data: [9, 10, 11, 12, null, 14, 15, null, 17],
        step: 'left', // 连接线转折对齐
        name: 'Left'
    }]
});
};
onMounted(() => {
    initChart();
    height.value=height.value+400;
});
</script>

<style scoped  >
    #container {
        height:var(--height)+'px';
    }
</style>
