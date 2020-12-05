<template>
  <div class="map-content">
    <!--
      Drag : __drag
      Grab : __grab 클래스 추가
    -->
    <div class="map-content__inner __drag __grab">

      <!-- 지도 표시 & 마커 -->
      <div class="map-marker" style="transform:translate3d(60px, 0px, 0px)">
        <StationMarker />
      </div>
    </div>

    <!-- Map Controller -->
    <MapControllerGroup />

    <!-- Legend (범례) -->
    <Legend />
  </div>
</template>


<script>
  import MapControllerGroup from './MapControllerGroup';
  import StationMarker from './StationMarker';
  import Legend from './Legend';


  export default {
    name: 'TheMap',
    components: {
      MapControllerGroup,
      StationMarker,
      Legend
    },
    data () {
      return {}
    }
  }
</script>

