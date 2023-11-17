// enum contentMember {
//   projectCode = 'projectCode',
//   projectName = 'projectName',
//   projectFlag = 'projectFlag',
//   createdDate = 'createdDate',
//   migrateFlag = 'migrateFlag',
// }

type GetWssContent = {
  projectCode: string;
  projectName: string;
  projectFlag: string;
  createdDate: string;
  migrateFlag: string;
}

type PostJiraProjcetContent = {
  key: string;
  jiraProjectName: string;
  migratedDate: string;
  projectCode: string;
  wssProjectName: string;
}

export interface returnJsonType {
  content: Array<GetWssContent>;
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pagealbe: object
  size: number
  sort: object
  totalElements: number
  totalPages: number
}

export interface PostReturnJsonType {
  content: Array<PostJiraProjcetContent>;
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pagealbe: object
  size: number
  sort: object
  totalElements: number
  totalPages: number
}


export interface urlType {
  getViewURL: string;
  getSerchURL: string;
  postSubmitUrl: string;
}

export interface pageInfoType { totalPage: number; numberOfElement: number; }
