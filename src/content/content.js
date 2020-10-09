chrome.storage.sync.get(['blacklistGlobs', 'isEnabled'], ({ blacklistGlobs = [], isEnabled = true }) => {
  console.log(isEnabled);
  if (!isEnabled) return

  blacklistGlobs.forEach(async glob => {
    if (!glob) return

    const pattern = new RegExp(glob)

    if (pattern.test(window.location.href)) {
      const resp = await fetch(chrome.runtime.getURL('src/content/blocked.html'))
      const blockedHTML = await resp.text()

      document.write(blockedHTML)
    }
  })
})