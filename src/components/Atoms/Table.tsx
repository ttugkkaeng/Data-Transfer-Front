import './Table.css';
import { returnJsonType } from '../../Common/Types';

type propsType = {
  getViewList: returnJsonType | undefined;
}

export default function Table({ getViewList }: propsType) {
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
        {getViewList !== undefined ?
          <tbody>
            {
              getViewList.content.map((item, index) => (
                <tr className='protr' key={item.projectCode}>
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
              ))
            }
          </tbody>
          :
          <tbody className='no-data-text'>
            <tr><td>No data</td></tr>
          </tbody>
        }
      </table>
    </div>
  )
}
