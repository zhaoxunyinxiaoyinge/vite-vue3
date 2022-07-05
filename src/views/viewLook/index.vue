<script lang="ts" setup>
import { onBeforeMount, onMounted, reactive, ref, nextTick } from "vue";

import china from "./../../utils/china.js";
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import Highmaps from "highcharts/modules/map";

import { mainStore } from "./../../store/index";

HighchartsMore(Highcharts);
Highmaps(Highcharts);
HighchartsMore(Highcharts);
Highmaps(Highcharts);

let charts = null;

let store = mainStore();

const initChart = () => {
  var data = [];
  store.list.areaTree &&
    store.list.areaTree[0]?.children.map((item) => {
      data.push({
        name: item.name,
        value: [item.total.nowConfirm],
      });
    });

  charts = new Highcharts.Map("container", {
    chart: {
      events: {
        click:function(e){
          console.log(e);
        }
      },
    },
    title: {
      text: "",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    credits: { enabled: false },
    tooltip: {
      formatter: function () {
        if (!this.point.value) {
          return this.point.name;
        } else {
          return this.point.name + "：" + this.point.value;
        }
      },
    },
    colorAxis: {
      min: 0,
      minColor: "rgb(39, 20, 209);",
      maxColor: "#006cee",
      tickColor: "#ff0000",
      labels: {
        style: {
          color: "red",
          fontWeight: "bold",
        },
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        cursor: "pointer",
        data: data,
        mapData: china,
        joinBy: "name",
        title: "name",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            fontSize: "10px",
          },
        },
        states: {
          hover: {
            color: "#a4edba",
          },
        },
      },
    ],
  });
};

let datas = reactive([]);
onMounted(() => {
      initChart();
});

onBeforeMount(async () => {
  await store.getXinGuan();
});
</script>

<template>
  <div class="content">
    <div id="container"></div>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: 100vh;
  width: 100vw;
}

#views {
  width: 100vw;
  height: 100vh;
}
</style>
