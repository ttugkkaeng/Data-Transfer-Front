import SectionSideCategory from '../Molecules/SectionSideCategory';
import './SideNavigator.css';
import '../../Common/Common.css';

export default function SideNavigator() {
  const firstitem = [
    { value: "지라 프로젝트 생성요청", link: "/load-wss" },
    { value: "프로젝트 티켓생성요청", link: "/jiratkcreate" },
    { value: "이관상태 확인", link: "/checkpj" },
  ]
  //const seconditem = ['대상 프로젝트 백업요청', '백업상태 확인'];
  const seconditem = [
    { value: "대상 프로젝트 백업요청", link: "/requestbackup" },
    { value: "백업상태 확인", link: "/backcheck" },
  ]
  return (
    <div className='side-navigator'>
      <SectionSideCategory title='WSS to Jira' item={firstitem} />
      <div className='division-line' />
      <SectionSideCategory title='Jira to WSS' item={seconditem} />
    </div>
  )
}
