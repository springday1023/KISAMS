<template>
  <div class="map-quick">
    <h2 class="blind">Quik Menu</h2>
    <ul>
      <li class="map-quick__menu">
        <a href="#none" class="map-quick__button">Help</a>
      </li>
      <li class="map-quick__menu">
        <h3>Timezone</h3>
        <button type="button" class="map-quick__button">KST</button>
        <button type="button" class="map-quick__button map-quick__button--active">UTC</button>
      </li>
      <li class="map-quick__menu">
        <h3>Map</h3>
        <button type="button" class="map-quick__button">1</button>
        <button type="button" class="map-quick__button">2</button>
        <button type="button" class="map-quick__button">3</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuickMenuGroup',
  data () {
    return {}
  }
}
</script>

