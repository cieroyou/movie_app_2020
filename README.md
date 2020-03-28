# React Movie App

니콜라스 강의를 따라하며 만든 리액트 앱

## Get Movie List API from
yts api 는 계속 구조가 바뀜
https://yts.mx/api/v2/list_movies.json
to
https://yts-proxy.now.sh/list_movies.json

## Deploy to Github pages
1. 깃헙 페이지 설치   
    ```cmd
    npm i gh-pages
    ```
2. 깃헙 user name, 프로젝트 이름 두개 가져오기   
  명령어 ```git remote -v``` 를 통해 확인 가능   
  origin  https://github.com/${username}/${project name}.git (fetch)   
3. package.json 수정 - homepages 추가   
   ```json
   "homepage": "https://cieroyou.github.io/movie_app_2020/"
   ```   
4. 명령어 ```npm run build``` 를 통해 빌드한 후, build 폴더 생성된 것 확인하기
5. package.json 수정 - script 추가  
   predeploy 를 통해서 deploy를 호출할때 마다, predeploy 스크립트를 먼저 수행
   ```json
   "deploy": "gh-pages -d build",
   "predeploy": "npm run build"
   ```
6. 명령어 ```npm run deploy``` 실행하고 npm run build와 hg-pages -d build 가 순차적으로 실행되는 것을 확인
7. https://cieroyou.github.io/movie_app_2020/ 에 접속하여 확인

   
