<template>
  <!-- 오픈 시 map-legend--open 클래스 추가 -->
  <div class="map-legend">
    <header class="map-legend__header">
      <h3>범례</h3>
      <a class="arrow" role="button">내용 펼치기</a>
    </header>

    <section class="map-legend__content">
      <LegendEarthquake />
      <LegendInfraLoc />
      <LegendMetadata />

      <div class="map-legend__tab">
        <a role="button">Earthquick</a>
        <a role="button">Infrasound</a>
        <a role="button">Infrasound Metadata</a>
      </div>
    </section>
  </div>
</template>


<script>
import LegendEarthquake from './LegendEarthquake';
import LegendInfraLoc from './LegendInfraLoc';
import LegendMetadata from './LegendMetadata';


export default {
  name: 'Legend',
  components: {
    LegendEarthquake,
    LegendInfraLoc,
    LegendMetadata,
  },
  data () {
    return {}
  }
}
</script>

