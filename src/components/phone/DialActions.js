export const resetRotation = () => {
  const dial = document.querySelector('.dial--controller')

  return (
    // rotate back to default position
    (dial.style = `--dial-rotate: 0deg; transition: rotate 1s`)
  )
}
export const rotateDial = (e, deg) => {
  return (e.currentTarget.closest(
    '.dial--controller',
  ).style = `--dial-rotate: ${deg}deg`)
}
export const calcRotationAngle = (e) => {
  const obj = document
    .querySelector('.dial--controller')
    .getBoundingClientRect()
  const x = e.clientX - (obj.x + obj.width / 2)
  const y = obj.y + obj.height / 2 - e.clientY

  return (Math.atan2(x, y) * 180) / Math.PI
}
export const checkOverlapEl = (e) => {
  // get stopper element properties
  const obj1 = document.querySelector('.stopper').getBoundingClientRect()
  // get current btn element properties
  const obj2 = e.currentTarget.getBoundingClientRect()

  return (
    // check if the button overlaps the stopper
    obj1.top < obj2.top && obj1.bottom > obj2.bottom && obj1.right < obj2.right
  )
}
