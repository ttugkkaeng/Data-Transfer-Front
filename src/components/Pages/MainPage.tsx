import MainPageTemplate from '../Templates/MainPageTemplate';

export default function MainPage() {
  //컴포넌트 초기화용 key
  const key = Math.random().toString(36).substring(7);
  return <MainPageTemplate key={key} />
}
