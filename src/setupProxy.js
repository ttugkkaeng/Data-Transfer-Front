import proxy from 'http-proxy-middleware';
export default function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000', //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};
