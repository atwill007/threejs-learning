export const pushPath = path => {
  window._router && window._router.history.push(path)
}

export default {
  pushPath
}
