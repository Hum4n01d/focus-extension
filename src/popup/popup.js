import './popup.css'

const blacklistEl = document.querySelector('#blacklist')

window.addEventListener('load', (event) => {
  chrome.storage.sync.get(['blacklistGlobs'], ({ blacklistGlobs = [] }) => {
    blacklistEl.value = blacklistGlobs.join('\n') || ''
  })
})

blacklistEl.addEventListener('input', () => {
  const blacklistGlobs = blacklistEl.value.split('\n')
  chrome.storage.sync.set({ blacklistGlobs })
})
