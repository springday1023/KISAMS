<template>
  <div class="map-data__board">
    <div class="map-data__filter">
      <button type="button" class="map-data__button">Earthquake</button>
      <button type="button" class="map-data__button">Infrasound</button>
      <button type="button" class="map-data__button">Infrasound Metadata</button>
    </div>

    <DataFilterSummary />
    <SortableDataListEarthquake />
  </div>
</template>

<script>
import DataFilterSummary from './DataFilterSummary';
import SortableDataListEarthquake from './SortableDataListEarthquake';

export default {
  name: 'DataBoard',
  components: {
    DataFilterSummary,
    SortableDataListEarthquake
  },
  data () {
    return {}
  }
}
</script>

