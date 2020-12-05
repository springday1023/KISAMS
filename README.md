# KISAMS

### 🚀 추가한 모듈
- npm install -g node-sass
- npm install vuescroll
- npm install vue-slider-component --save

-----------------------

### 🚀 SASS 컴파일 
- node-sass --output-style compressed src/assets/scss --output src/assets/css --watch
  * --output-style : compressed 압축 (minify)
  * SCSS 폴더 --output 컴파일 될 CSS 폴더  
  * --watch : SCSS 수정 시마다 관찰하여 자동 컴파일

-----------------------

### 🚀 작업 폴더
┏ 📁 components   
├─ App   
├─ HelpPage   
├─ LoadingScreen (로딩)   
├─ MainMenu (왼쪽 상단 메뉴 영역 - 실시간 감시/자료 조회)    
├─ NoticeBoard (알림 레이어)   
├─ NoticeItem   
├─ 📁 databoard   
    ├─ DataBoard (왼쪽 데이터 Container)   
    ├─ DataFilterFormEarthquake (지진 조회 조건 설정 레이어)   
    ├─ DataFilterFormWindow (레이어 Wrapper)    
    ├─ DataFilterSummary (데이터보드 --> 필터 정보)    
    ├─ DataListItem (데이터보드 리스트 --> 아이템)    
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
    ├─ QuickMenuGroup (상단 퀵메뉴)   

-----------------------

### 🚀 CSS 작업폴더
┏ 📁 src   
├─ 📁 assets/scss   
    ├─ common : 공통 클래스    
    ├─ databoard : 데이터보드    
    ├─ databoard_form : 데이터보드 --> 필터 정보     
    ├─ loading : 로딩   
    ├─ map_control : 우측 컨트롤부분   
    ├─ map_legend : 범례   
    ├─ map_marker : 맵 안 설명 레이어   
    ├─ map : 맵    
    ├─ notice : 알림 레이어 
    ├─ quickmenu : 상단 퀵메뉴   
    ├─ reset : 리셋   
    ├─ __default : 모든 SCSS import__      

-----------------------

### 🚀 CSS 클래스 네이밍
- 페이지명 map- 으로 시작 + 블록 및 컴포넌트 의미를 가진 클래스 추가   
  * 블록 : map-wrapper, 
  * 컴포넌트 : map-data ...   
- 하위는 해당 영역의 엘리먼트 
  * 데이터 컴포넌트의 버튼 : map-data__button ...
- 액션이 일어나는 부분에 대해서는 --active, --open 등으로 -- 추가 
  * 버튼 활성화 : map-data__button--active ...    
- 타입 등이 바뀌는 클래스는 ____네이밍__ 으로 추가   
  * 지도 드래그/그랩: map-content__inner ____drag__, ____grab__  
  * 아이콘 타입 h1 : icon-magnitude ____1h__)

-----------------------

### 🚀 Build Setup

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
