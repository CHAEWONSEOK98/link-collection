# link-collection

- action : react
- css : tailwindcss
- router : react-router-dom
- state management : recoil

## front - 구현하고 싶은 기능

- 홈 화면에서 폴더를 만들고, 그 폴더 안에 링크
- localstorage를 사용하여 데이터 저장
- 회원가입

## css - 구현하고 싶은 기능

- 페이지 보는 형식 : 리스트 형식, 아이콘 형식
- 반응형

<hr />

[문제 상황]

홈 화면에서 폴더를 만들 수 있고, 그 폴더 안에 링크
폴더 대신 특정 버튼을 눌렀을 때 페이지를 만들고
그 페이지 안에서 링크를 저장하여 사용할 수 있도록 만든다.

food page

- pizza
- kimchi
- japan food page
  - sushi
  - ramen

헤더는 모든 화면에서 상단에 존재
특정 위치가 아닌 모든 위치에서 헤더의 페이지 생성을 클릭 시 페이지를 생성할 수 있어야하고
생성된 페이지는 정해진 위치에 렌더링 되어야 한다.
props로 데이터를 넘겨주는 형식은 비효율적 x
useContext를 사용해도 좋지만 상태관리 라이브러리를 사용하고 싶음.

- 나중에 큰 프로젝트를 진행할 땐 useContext를 사용하지 않음.
- 상태관리 라이브러리를 알아보고 공부하고 싶음.

redux, recoil 중에 공부해서 사용.

<hr />
redux > redux-react > redux-toolkit 으로 변화하는 과정 속에서 각각 공부해본 결과
redux는 난해하고 복잡하다. 특히 데이터 통신을 다루는 부분에서의 thunk는 어렵고 복잡했다.
분명 핵심은 상태관리를 위한 라이브러리지만 주객전도된 느낌? 그래서 나중에 redux의 필요성을 느낄 때 redux와 더불어 rtk query까지 같이 배워야겠다.

현재 프로젝트는 크지 않고, 상태 관리가 필요하기 때문에 recoil 선택.
