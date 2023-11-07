export interface returnJsonType {
  content: Array<object>;
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
