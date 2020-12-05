# kisams

### 추가한 모듈
- npm install -g node-sass
- npm install vuescroll
- npm install vue-slider-component --save

-----------------------

### SASS 컴파일 
- node-sass --output-style compressed src/assets/scss --output src/assets/css --watch
  * --output-style : compressed 압축 (minify)
  * SCSS 폴더 --output 컴파일 될 CSS 폴더  
  * --watch : SCSS 수정 시마다 관찰하여 자동 컴파일

-----------------------

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


-----------------------


### 작업 폴더
┏ 📁 components   
├─ App   
├─ HelpPage   
├─ LoadingScreen   
├─ MainMenu (왼쪽 상단 메뉴 영역 - 실시간 감시/자료 조회)    
├─ NoticeBoard   
├─ NoticeItem   
├─ 📁 databoard   
           ├─ DataBoard (왼쪽 대시보드 Container)   
           ├─ DataFilterFormEarthquake (지진 조회 조건 설정 레이어)   
           ├─ DataFilterFormWindow (레이어 Wrapper)    
           ├─ DataFilterSummary (대시보드 --> 필터 정보)    
           ├─ DataListItem (대시보드 리스트 --> 아이템)    
           ├─ SortableDataListEarthquake (자료개수/ 정렬 필터 / 카탈로그별)   
├─ 📁 map   
           ├─ Legend (맵 : 범례 레이어 - Container/Header)   
           ├─ LegendEarthquake (맵 : 범례 레이어 - Earthquake)   
           ├─ LegendInfraLoc (맵 : 범례 레이어 - Infrasound)   
           ├─ LegendMetadata (맵 : 범례 레이어 - Infrasound Metadata)   
           ├─ MapControllerGroup (우측 컨트롤부분)   
           ├─ StationMarker (맵 : 레이어)   
           ├─ TheMap (맵 Container)   
├─ 📁 quickMenu   
          ├─ QuickMenuGroup   


