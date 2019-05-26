function enableBodyScroll () {
  toggleBodyScrollBehavior({ canScroll: true })
}

function disableBodyScroll () {
  toggleBodyScrollBehavior({ canScroll: false })
}

function toggleBodyScrollBehavior ({ canScroll }) {
  document.body.style.overflowY = canScroll ? '' : 'hidden'
}

/** Disables scrolling when the component is alive. */
export default {
  mounted () {
    disableBodyScroll()
  },

  beforeDestroy () {
    enableBodyScroll()
  }
}
