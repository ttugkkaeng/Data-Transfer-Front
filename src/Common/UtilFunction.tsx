import { returnJsonType, PostReturnJsonType, GetWssContent, emptyJson } from './Types';

export function mappingViewData(retrunJson: PostReturnJsonType | undefined): returnJsonType {
  const tempArray: GetWssContent[] = [];
  let returnArray: returnJsonType;
  if (retrunJson === undefined) {
    returnArray = emptyJson;
  }

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
  console.log(returnArray);
  return returnArray;
}
