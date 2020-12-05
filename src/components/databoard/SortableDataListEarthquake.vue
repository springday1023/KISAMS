<template>
  <section class="map-data__result">
    <h3 class="blind">조회 결과 리스트</h3>
    <header class="map-data__header">
      <p>자료 개수 : 7</p>

      <select>
        <option>최근순</option>
        <option>과거순</option>
      </select>

      <label for="checkbox">(카탈로그 별 <input id="checkbox" type="checkbox" />)</label>
    </header>

    <div class="map-data__content">
      <vuescroll ref="vuescroll" :ops="vueScrollOptions" class="map-data__content-innr">
        <DataListItem />
      </vuescroll>
    </div>

    <footer class="map-data__footer">
      <label for="checkbox_listOnly">
        <input type="checkbox" id="checkbox_listOnly">
        현재 지도 범위 내 자료만 보기
      </label>

      <a href="csv.csv">자료 목록 다운로드 <u>(CSV)</u></a>
    </footer>
  </section>
</template>

<script>
import DataListItem from './DataListItem';
import vuescroll from 'vuescroll';

export default {
  name: 'SortableDataListEarthquake',
  components: {
    vuescroll,
    DataListItem
  },
  data () {
    return {
      vueScrollOptions: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
        },
        scrollPanel: {
          scrollingX: false,
          easing: undefined,
        },
        rail: {
          background: '#f1f1f1',
          opacity: 0.2,
          size: '6px',
          specifyBorderRadius: '6px',
          gutterOfEnds: null,
          gutterOfSide: '6px',
          keepShow: false,
        },
        bar: {
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#888',
          hoverStyle: 'background: #ff0000',
          specifyBorderRadius: '6px',
          minSize: 0.1,
          size: '6px',
          //disable: false,
        }
      }
    }
  }
}
</script>

