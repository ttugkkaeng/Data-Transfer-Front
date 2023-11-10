import proxy from 'http-proxy-middleware';
export default function (app) {
  app.use(
    proxy({
      target: 'http://localhost:8080', //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};
