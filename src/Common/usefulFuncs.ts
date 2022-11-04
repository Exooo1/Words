export const changeTitle = (text: string) => {
  const title = document.getElementsByTagName('title')
  title[0].innerText = text
}
