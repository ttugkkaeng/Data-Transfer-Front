import './BtnSubmit.css';
type propsType = {
  children: string
}
export default function BtnSubmit({ children = '전송' }: propsType) {
  return (
    <button type='submit' className='btnHover blueColor'>{children}</button>
  )
}
