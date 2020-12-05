<template>
  <div class="map-legend__item">
    <dl>
      <dt>카탈로그</dt>
      <dd>
        <span class="icon-magnitude __1h __2 __manual" style="background:rgba(var(--color-1h), 0.2);"></span>
        수동분석
      </dd>
      <dd>
        <span class="icon-magnitude __1h __2 __auto" style="background:rgba(var(--color-1h), 0.2);"></span>
        자동분석
      </dd>
      <dd>
        <span class="icon-magnitude __1h __2 __etc"></span>
        기타
      </dd>
    </dl>

    <dl>
      <dt>규모</dt>
      <dd>
        <span class="icon-magnitude __1h __2"></span>
        2
      </dd>
      <dd>
        <span class="icon-magnitude __1h __3"></span>
        3
      </dd>
      <dd>
        <span class="icon-magnitude __1h __4"></span>
        4
      </dd>
      <dd>
        <span class="icon-magnitude __1h __5"></span>
        5
      </dd>
      <dd>
        <span class="icon-magnitude __1h __7"></span>
        7
      </dd>
      <dd>
        <span class="icon-magnitude __1h __9"></span>
        9
      </dd>
    </dl>

    <dl>
      <dt>기간 (<a role="button">깊이</a>로 보기)</dt>
      <dd>
        <span class="icon-magnitude __1h __2"></span>
         ≤1h
      </dd>
      <dd>
        <span class="icon-magnitude __3h __2"></span>
        ≤3h
      </dd>
      <dd>
        <span class="icon-magnitude __6h __2"></span>
        ≤6h
      </dd>
      <dd>
        <span class="icon-magnitude __12h __2"></span>
        ≤12h
      </dd>
      <dd>
        <span class="icon-magnitude __max __2"></span>
        &gt;12h
      </dd>
      <dd>
        <span class="icon-magnitude __null __2"></span>
        N/A
      </dd>
    </dl>
  </div>
</template>


<script>

export default {
  name: 'LegendEarthquake',
  components: {
  },
  data () {
    return {}
  }
}
</script>

