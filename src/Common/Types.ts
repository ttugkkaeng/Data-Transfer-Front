// enum contentMember {
//   projectCode = 'projectCode',
//   projectName = 'projectName',
//   projectFlag = 'projectFlag',
//   createdDate = 'createdDate',
//   migrateFlag = 'migrateFlag',
// }
type content = {
  projectCode: string;
  projectName: string;
  projectFlag: string;
  createdDate: string;
  migrateFlag: string;
}
export interface returnJsonType {
  content: Array<content>;
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: boolean
  pagealbe: object
  size: number
  sort: object
  totalElements: number
  titalPage: number
}

export interface urlType {
  getViewURL: string;
  getSerchURL: string;
  postSubmitUrl: string;
}
