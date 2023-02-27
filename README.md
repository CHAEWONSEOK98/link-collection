# link-collection

- action : react
- css : tailwindcss
- router : react-router-dom
- state management : redux or recoil

## front - 구현하고 싶은 기능

- 홈 화면에서 폴더를 만들고, 그 폴더 안에 링크

## css - 구현하고 싶은 기능

- 리스트 보기, 아이콘 보기

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

- 큰 프로젝트를 진행할 땐 useContext를 사용하지 못함.
- 상태관리 라이브러리를 알아보고 공부하고 싶음.

redux, recoil 중에 공부해서 사용.
