import BtnLink from '../Atoms/BtnLink'

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
    <div>
      <h3>{props.title}</h3>
      {props.item.map((item, index) => (
        <BtnLink key={index} btnValue={item.value} btnLink={item.link} />
      ))}
    </div >
  )
}



//<h4 key={index}>{item.value}</h4>
