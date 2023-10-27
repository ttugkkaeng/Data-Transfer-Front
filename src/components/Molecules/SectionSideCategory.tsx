import BtnLink from '../Atoms/BtnLink'
import './SectionSideCategory.css'
type btnLinkValue = {
  value: string,
  link: string
}
type propType = {
  title: string,
  item: Array<btnLinkValue>
}
export default function SectionSideCategory(props: propType) {
  return (
    <div className='Sidebardiv'>
      <div className='CategoryTitle'>{props.title}</div>
      {props.item.map((item, index) => (
        <BtnLink key={index} btnValue={item.value} btnLink={item.link} />
      ))}
    </div >
  )
}
