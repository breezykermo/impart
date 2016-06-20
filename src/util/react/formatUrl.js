export const formatUrl = str => {
  if ((str !== undefined) && (str !== '')) {
    return { uri: str }
  }
  return undefined
}
