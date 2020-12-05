<template>

  <div class="map-control">
    <h2 class="blind">관측 정보 지도에 노출</h2>
    <ul class="map-control__inner">
      <li>
        <button type="button" class="map-control__button map-control__button--active"><abbr title="지진(Earthquake)">E</abbr></button>
      </li>
      <li>
        <button type="button" class="map-control__button"><abbr title="공중음파(Infrasound)">I</abbr></button>
      </li>
      <li>
        <button type="button" class="map-control__button"><abbr title="공중음파 탐지 정보(Infrasound Detection Metadata)">M</abbr></button>
      </li>
      <li>
        <button type="button" class="map-control__button"><abbr title="지진/공중음파 관측소(Seismic/Infrasound Station)">S</abbr></button>
      </li>
      <li>
        <button type="button" class="map-control__button"><abbr title="공중음파 탐지 능력(Infrasound Detection Capability)">D</abbr></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MapcontrolGroup',
  data () {
    return {}
  }
}
</script>

