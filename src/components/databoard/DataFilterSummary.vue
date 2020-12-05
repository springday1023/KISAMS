<template>
  <article class="map-data__summary">
    <h3>지진 조회 조건</h3>
    <ul>
      <li>카탈로그: 수동분석, 자동분석, KEEW</li>
      <li>기간: 최근 1일</li>
      <li>규모: 2.0 이상</li>
    </ul>
    <a href="#layerDataFilter" class="map-data__summary-edit" title="조회조건 변경 레이어 열기"><span class="icon-filter">조회조건변경 필터</span></a>
  </article>
</template>

<script>
export default {
  name: 'DataFilterSummary',
  data () {
    return {}
  }
}
</script>

