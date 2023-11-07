import './Table.css';
import { testJson } from '../../Common/TestGetJson';

export default function Table() {
  return (
    <div className='table-area'>
      <table className='project-table'>
        <thead>
          <tr>
            <th scope='col' className='check-box-th'>구분</th>
            <th scope='col' className='project-name-th'>프로젝트명</th>
            <th scope='col' className='date-th'>업데이트 날짜</th>
          </tr>
        </thead>
        <tbody>
          {testJson.content.map((item, index) => (
            <tr className='protr'>
              <td>
                <input type='checkbox' name={`checkbox${index}`} value='test' />
              </td>
              <td>
                {`(${item.projectCode}) `}{item.projectName}
              </td>
              <td>
                {item.createdDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
