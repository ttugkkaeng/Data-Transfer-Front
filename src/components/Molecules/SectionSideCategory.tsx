import BtnLink from '../Atoms/BtnLink'
import './SectionSideCategory.css'

type btnLinkValue = {
  value: string,
  link: string
}
type SectionSideCategoryProps = {
  title: string,
  item: Array<btnLinkValue>
}

export default function SectionSideCategory(props: SectionSideCategoryProps) {
  return (
    <div className='siebar-div'>
      <div className='category-title'>{props.title}</div>
      {props.item.map((item, index) => (
        <BtnLink key={index} btnValue={item.value} btnLink={item.link} />
      ))}
    </div >
  )
}
