let count = 0
coust countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: '+ count
}