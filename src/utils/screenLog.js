/* eslint-disable */
export const printANSI = () => {
  // console.clear() 
  // ASCII - ANSI Shadow
  let text = `    
\t\t\t\t\tPublished ${APP_VERSION}-${GIT_HASH} 
\t\t\t\t\tBuild date: ${BUILD_DATE}`
  console.log(`%c${text}`, 'color: #fc4d50') 
}
