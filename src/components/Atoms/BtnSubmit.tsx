import { ReactNode } from 'react';
import './BtnSubmit.css';
type propsType = {
  children?: ReactNode
}
export default function BtnSubmit({ children = "제출" }: propsType) {
  return (
    <button type='submit' className='btnHover blueColor'>{children}</button>
  )
}
