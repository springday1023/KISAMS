<template>
  <div class="map-filter__inner">
    <header class="map-filter__header">
      <h2>지진 조회 조건 설정</h2>
      <button type="button" class="icon-delete">레이어 닫기</button>
    </header>

    <form method="post" action="/" class="map-filter__form">
      <fieldset class="map-filter__field">
        <legend>기간</legend>

        <div class="map-filter__field-row">
          <input type="radio" name="filter_period" id="filter_period_15min">
          <label for="filter_period_15min">15분</label>

          <input type="radio" name="filter_period" id="filter_period_30min">
          <label for="filter_period_30min">30분</label>
        </div>

        <div class="map-filter__field-row">
          <input type="radio" name="filter_period" id="filter_period_1h">
          <label for="filter_period_1h">1시간</label>

          <input type="radio" name="filter_period" id="filter_period_3h">
          <label for="filter_period_3h">3시간</label>

          <input type="radio" name="filter_period" id="filter_period_6h" disabled>
          <label for="filter_period_6h">6시간</label>
        </div>

        <div class="map-filter__field-row">
          <input type="radio" name="filter_period" id="filter_period_cust">
          <label for="filter_period_cust">직접 입력</label>

          <ul class="map-filter__cust">
            <li>
              <label for="filter_period_cust_start">Start</label>
              <input type="text" name="filter_period_start" id="filter_period_start" placeholder="자료조회모드 전용">
            </li>
            <li>
              <label for="filter_period_cust_end">End</label>
              <input type="text" name="filter_period_end" id="filter_period_end" placeholder="자료조회모드 전용" disabled>
            </li>
          </ul>
        </div>
      </fieldset>

      <fieldset class="map-filter__field">
        <legend>관측소 개수</legend>

        <div class="map-filter__slider">
          <div class="map-filter__num">
            <label for="sizeMin__">Min</label>
            <input id="sizeMin__" type="text" vlaue="0">
          </div>
          <span class="map-filter__num-range">1</span>
          <vue-slider v-model="value" class="map-filter__slider-range" />
          <span class="map-filter__num-range">150</span>
          <div class="map-filter__num">
            <label for="sizeMax__">Max</label>
            <input id="sizeMax__" type="text" value="10">
          </div>
        </div>

        <div class="map-filter__switch">
          <input type="checkbox" id="switch_num" checked>
          <label for="switch_num" title="Switch On/Off"></label>
        </div>
      </fieldset>

      <fieldset class="map-filter__field">
        <legend>카탈로그</legend>

        <div class="map-filter__field-row">
          <input type="checkbox" name="filter_cate" id="filter_cate_auto">
          <label for="filter_cate_auto">자동분석</label>

          <input type="checkbox" name="filter_cate" id="filter_cate_manual">
          <label for="filter_cate_manual">수동분석</label>
        </div>

        <div class="map-filter__field-row">
          <input type="checkbox" name="filter_cate" id="filter_cate_keew">
          <label for="filter_cate_keew">KEEW</label>

          <input type="checkbox" name="filter_cate" id="filter_cate_iris">
          <label for="filter_cate_iris">IRIS</label>
        </div>
      </fieldset>

      <fieldset class="map-filter__field">
        <legend>규모</legend>

        <div class="map-filter__slider">
          <div class="map-filter__num">
            <label for="sizeMin_">Min</label>
            <input id="sizeMin_" type="text" vlaue="0">
          </div>
          <vue-slider v-model="value" class="map-filter__slider-range" />
          <div class="map-filter__num">
            <label for="sizeMax_">Max</label>
            <input id="sizeMax_" type="text" value="10">
          </div>
        </div>

        <div class="map-filter__switch">
          <input type="checkbox" id="switch_size" checked>
          <label for="switch_size" title="Switch On/Off"></label>
        </div>
      </fieldset>

      <fieldset class="map-filter__field map-filter__field--disabled">
        <legend>깊이 (단위: km)</legend>

        <div class="map-filter__slider">
          <div class="map-filter__num">
            <label for="depthMin">Min</label>
            <input id="depthMin" type="text" vlaue="0">
          </div>
          <vue-slider v-model="value" class="map-filter__slider-range" />
          <div class="map-filter__num">
            <label for="depthMax">Max</label>
            <input id="depthMax" type="text" value="10">
          </div>
        </div>

        <div class="map-filter__switch">
          <input type="checkbox" id="switch_depth">
          <label for="switch_depth" title="Switch On/Off"></label>
        </div>
      </fieldset>

      <fieldset class="map-filter__field">
        <legend>위경도 (단위: °)</legend>

        <ul class="map-filter__location">
          <li>
            <div class="map-filter__num">
              <label for="location_top">Top</label>
              <input id="location_top" type="text" vlaue="0">
            </div>
          </li>
          <li>
            <div class="map-filter__num">
              <label for="location_left">Left</label>
              <input id="location_left" type="text" value="10">
            </div>
          </li>
          <li>
            <div class="map-filter__num">
              <label for="location_right">Right</label>
              <input id="location_right" type="text" value="10">
            </div>
          </li>
          <li>
            <div class="map-filter__num">
              <input id="location_bottom" type="text" value="10" disabled>
              <label for="location_bottom">Bottom</label>
            </div>
          </li>
        </ul>

        <div class="map-filter__switch">
          <input type="checkbox" id="switch_" checked>
          <label for="switch_" title="Switch On/Off"></label>
        </div>
      </fieldset>

      <div class="map-filter__btn">
        <button class="reset" type="reset">조건 조회 초기화</button>
        <button class="submit" type="submit">적용</button>
      </div>
    </form>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  name: 'DataFilterFormEarthquake',
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0
    }
  },
}
</script>

