import { urlType } from './Types';

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
