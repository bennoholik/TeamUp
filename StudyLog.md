# TeamUp 프로젝트를 하면서 했던 것과 배운점 정리!


### 230106
[tailwind 세팅](https://tailwindcss.com/docs/guides/nextjs)

### 230109
Todos
- [x] React Query와 연결해서 쓰기.
- [x] 메인페이지 API 연결한거 리엑트쿼리로 쓰기
- [x] API 모듈화.
  
Learned
 + nextjs에서 instance 생성하고 백엔드 url 넣을려면 nextjs config 파일에서 publicRuntimeConfig에 설정해줘야한다.
 + getStaticPath랑 getStaticProps 사용법
 + usequery에서 queryFn에서 return을 해주지 않아서 값이 undefined가 되는 오류가 있었다. return필수.
 + 항상최신화가 필요하지 않는 곳에서는 stale time을 줘서 페이지를 리패칭하지 않도록하자.
 + 이미지 태그안에 src는 undefined가 뜨면 안되서 이부분 한번 체크해야함.


### 230109
Todos
- [ ] filter CSS 부분 작업


### 230110
Todos
- [x] 댓글 부분 API 연결
- [x] 댓글 부분 작업
  

### 중간에 바빠서 작업 못함 ㅠㅠ

### 230114
Todos
- [x] 로그인 관련 작업

Learned
+ Hydration Error 해결법.
Error: Hydration failed because the initial UI does not match what was rendered on the server.
서버에서 정의된 UI 와 달라서 생기는 문제.
getCookieToken이 클라이언트 사이드에서만 가지고 올수있기때문에 생기는 문제이다. UseEffect를 활용하여 해결할수있다.
  + https://javascript.plainenglish.io/how-to-solve-hydration-error-in-next-js-a50ec54bfc02
  + https://nextjs.org/docs/messages/react-hydration-error

### 230115~230117
- [x] 로그인 API 연결
- [x] flex로 리스팅 하던것을 반응형 Grid로 변환
- [x] 게시글 작성
- [x] 필터 디자인 수정
- [x] 로그인 후 Header 부분 조건부 렌더링


### 당분간 바빠서 잠시보류

ReactQuill 같은 에디터 사용해서 글쓰기 해보자!


해야할것 정리
- 필터 적용.
- 검색 구현.
- 무한스크롤
- 알림.
- 북마크.
- 참가요청.
- 채팅.
- 마이페이지.
- 캐러셀.
- 편집.
- 