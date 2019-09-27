chrome.storage.sync.get(['blacklistGlobs'], ({ blacklistGlobs = [] }) => {
  blacklistGlobs.forEach(async glob => {
    if (!glob) return

    const pattern = new RegExp(glob)

    if (pattern.test(window.location.href)) {
      const resp = await fetch(chrome.runtime.getURL('overlay.html'))
      const overlayHTML = await resp.text()

      document.body.insertAdjacentHTML('beforebegin', overlayHTML)
    }
  })
})
