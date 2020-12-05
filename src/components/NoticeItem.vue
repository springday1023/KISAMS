<template>
  <div class="map-notice__inner">
    <span class="map-notice__icon __warn __error __info" title="Warning"></span>
    <p class="map-notice__context">
        자료 서버와 통신할 수 없습니다. 문제가 지속될 경우 관리자에게 문의하세요.
    </p>
    <button type="button" class="icon-delete">닫기</button>
  </div>
</template>

<script>
export default {
  name: 'NoticeItem',
  data () {
    return {}
  }
}
</script>

