import { returnJsonType, PostReturnJsonType, GetWssContent, emptyJson, urlType } from './Types';

export function mappingViewData(retrunJson: PostReturnJsonType | undefined): returnJsonType {
  const tempArray: GetWssContent[] = [];
  let returnArray: returnJsonType;
  if (retrunJson === undefined) { returnArray = emptyJson; }
  else {
    retrunJson.content.map((item) => {
      tempArray.push({
        projectCode: item.key,
        projectName: item.jiraProjectName,
        projectFlag: item.key,    //flag API에서 넣어서 주기로함 수정예정.
        createdDate: item.migratedDate,
        migrateFlag: item.wssProjectName
      })
    })

    returnArray = {
      ...retrunJson, content: tempArray
    }
  }
  return returnArray;
}

export const setUrl = (serviceType: string) => {
  const urlObject: urlType = {
    getViewURL: '',
    getSerchURL: '',
    postSubmitUrl: ''
  };
  switch (serviceType) {
    case 'trans-before':
      urlObject.getViewURL = 'http://localhost:8080/transfer/project/before/list';
      urlObject.getSerchURL = 'http://localhost:8080/transfer/project/before/list/search';
      urlObject.postSubmitUrl = 'http://localhost:8080/transfer/project/1/create/bulk';
      return urlObject;
    case 'trans-after':
      urlObject.getViewURL = 'http://localhost:8080/transfer/project/after/list';
      urlObject.getSerchURL = 'http://localhost:8080/transfer/project/after/list/search';
      urlObject.postSubmitUrl = 'http://localhost:8080/transfer/issue';
      return urlObject;
    case 'trans-end':
      urlObject.getViewURL = 'http://localhost:8080/transfer/issu/before/list';
      urlObject.getSerchURL = 'http://localhost:8080/transfer/issu/after/list';
      urlObject.postSubmitUrl = 'not';
      return urlObject;
    default:
      break;
  }
  return urlObject;
}


export function setIndexNumber(totalPage: number, pageIndex: number): number[] {
  const tempArray: number[] = [];
  switch (true) {
    case pageIndex <= 3:
      for (let i = 1; i <= pageIndex + 3 && i <= totalPage; i++) {
        tempArray.push(i);
      }
      break;
    case pageIndex > 3 && pageIndex < totalPage - 3:
      for (let i = pageIndex - 3; i <= pageIndex + 3; i++) {
        tempArray.push(i)
      }
      break;
    case pageIndex >= totalPage - 3:
      for (let i = pageIndex - 3; i <= totalPage; i++) {
        tempArray.push(i)
      }
      break;
    default:
      break;
  }
  return tempArray;
}
