<template>
  <div class="map-marker__popup  __fadein" style="transform:translate3d(806px, 400px, 0px); bottom:-7px; left:100px;">
    <div class="map-marker__popup-inner">
      <h4>간성 공중음파 관측소</h4>
      <ul>
        <li>관측소 코드: KSGAR</li>
        <li>관측개시일: 2004-01-08</li>
        <li>위경도: 38.58718, 128.3584</li>
        <li>고도: 36 m</li>
        <li>위치: 강원도 고성군 현내면</li>
      </ul>

      <button type="button" class="icon-delete">레이어 닫기</button>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'StationMarker',
    components: {
    },
    data () {
      return {}
    }
  }
</script>

