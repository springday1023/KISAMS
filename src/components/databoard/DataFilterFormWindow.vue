<template>
  <div class="map-filter" id="layerDataFilter">
    <DataFilterFormEarthquake />
  </div>
</template>

<script>
import DataFilterFormEarthquake from './DataFilterFormEarthquake';


export default {
  name: 'DataFilterFormWindow',
  components: {
    DataFilterFormEarthquake
  },
  data () {
    return {}
  }
}
</script>

