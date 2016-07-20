import { imageMap } from '../../offline'

export const getImageObj = (str, isDetail) => {
  let source = require('../../media/no-user-image.gif')
  if ((str !== undefined) && (str !== '')) {
    const localArr = str.split('local::')
    if (localArr.length === 2 && localArr[0] === '') {
      const key = isDetail ? localArr[1].replace('card', 'more') : localArr[1]
      source = imageMap[key]
    } else {
      source = { uri: str }
    }
  }
  return source
}
