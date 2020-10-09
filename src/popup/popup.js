const blacklistEl = document.querySelector('#blacklist')
const checkboxEl = document.querySelector('#checkbox')

window.addEventListener('load', (event) => {
  chrome.storage.sync.get(['blacklistGlobs', 'isEnabled'], ({ blacklistGlobs = [], isEnabled = true }) => {
    blacklistEl.value = blacklistGlobs.join('\n') || ''
    checkboxEl.checked = isEnabled
  })
})

blacklistEl.addEventListener('input', () => {
  const blacklistGlobs = blacklistEl.value.split('\n')
  chrome.storage.sync.set({ blacklistGlobs })
})

checkboxEl.addEventListener('click', () => {
  const isEnabled = checkboxEl.checked
  chrome.storage.sync.set({ isEnabled })
})