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

export default function SectionSideCategory({ title, item }: SectionSideCategoryProps) {
  return (
    <div className='Sidebardiv'>
      <div className='CategoryTitle'>{title}</div>
      {item.map((item, index) => (
        <BtnLink key={index} btnValue={item.value} btnLink={item.link} />
      ))}
    </div >
  )
}
