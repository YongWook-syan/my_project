const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');
const path = require('path');

const app = express();
const port = 3000;

// i18next 설정
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: 'ko',
    preload: ['en', 'ko', 'jp', 'zh'], // 지원 언어
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}.json') // 번역 파일 경로
    }
  });

app.use(middleware.handle(i18next));

// 정적 파일 (HTML, CSS, JS 등) 제공
app.use(express.static(path.join(__dirname, 'public')));

app.use('/locales', express.static(path.join(__dirname, 'locales')));


// 루트 요청에 index.html 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`✅ 서버가 http://localhost:${port} 에서 실행 중입니다`);
});