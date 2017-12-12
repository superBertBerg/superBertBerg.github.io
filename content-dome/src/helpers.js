
export function resize (viewPort, overElem) {
  console.log(viewPort.mobile)

  if (rescale > Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) {
    viewPort.mobile = true
    overElem.style.overflow = 'auto'
    // overElem.style.position = 'relative';
    overElem.style['overflow-x'] = 'hidden'
    console.log(overElem)

    overElem.removeEventListener('touchmove', stopIt)
    overElem.removeEventListener('touchstart', function () {

    })
    overElem.removeEventListener('touchend', function () {

    })
  } else {
    viewPort.mobile = false
    overElem.style.overflow = 'hidden'
    overElem.addEventListener('touchmove', stopIt, {passive: false})
    overElem.addEventListener('touchstart', startTouch)
    overElem.addEventListener('touchend', endTouch)
  }
}

function stopIt (e) {
  e.preventDefault()
  e.stopPropagation()
}

function startTouch (e) {
    // console.log('start')
  tsta = e.changedTouches[0].clientY
    // console.log(e)
}

function endTouch (e) {
    // console.log('end')
  tend = e.changedTouches[0].clientY
  touchThrottler()
}
