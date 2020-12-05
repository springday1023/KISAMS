
<template>
  <div id="app" class="map-wrapper">
    <h1 class="blind">지진, 공중음파, 공중음파 탐지 정보</h1>

    <TheMap />
    <QuickMenuGroup />

    <div class="map-data">
      <h2 class="blind">데이터 조회하기</h2>
      <MainMenu />
      <DataBoard />
    </div>

    <DataFilterFormWindow />
    <NoticeBoard />
    <HelpPage />
    <LoadingScreen />
  </div>
</template>


<script>
import TheMap from './map/TheMap';
import MainMenu from './MainMenu';
import DataBoard from './databoard/DataBoard';
import DataFilterFormWindow from './databoard/DataFilterFormWindow';
import QuickMenuGroup from './quickMenu/QuickMenuGroup';
import NoticeBoard from './NoticeBoard';
import HelpPage from './HelpPage';
import LoadingScreen from './LoadingScreen';


export default {
  name: 'App',
  components: {
    TheMap,
    MainMenu,
    DataBoard,
    DataFilterFormWindow,
    NoticeBoard,
    QuickMenuGroup,
    HelpPage,
    LoadingScreen
  },
  data () {
    return {}
  }
}
</script>

