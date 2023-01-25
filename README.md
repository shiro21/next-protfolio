### npm install
npm install -D tailwindcss
npm install autoprefixer
npm install react-lottie-player
npm install dotenv
<!-- 노션 관련 https://www.npmjs.com/package/@notionhq/client -->
npm install @notionhq/client
<!-- 다크모드 관련 theme -->
npm install next-themes



-- npm install --save @lottiefiles/react-lottie-player ( 사용 안했음 )


## Tailwind CSS
npx tailwindcss init를 해주면 최상위 폴더에tailwind.config.js가 생성됩니다.

tailwind.config.js에 content 배열 내부에 내용을 추가해주고, 다크모드를 적용시키려면 darkMode: 'class'를 추가시켜줍니다.
( src폴더를 추가시켰을 경우에는 ./src~로 추가해줍니다.)

postcss.config.js를 생성하고 내용을 추가해줍니다.

./styles/globals.css에 base, components, utilities를 추가해줍니다.
:: https://tailwindcss.com/docs/guides/nextjs

## Notion API
Notion API 만드는 방법 : https://shiro21.tistory.com/306
npm install @notionhq/client를 설치하고 