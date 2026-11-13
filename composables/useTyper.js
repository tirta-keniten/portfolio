import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useTyper(words, options = {}) {
  const {
    typeDelay = 70,
    eraseDelay = 25,
    holdDelay = 3000,
    startDelay = 70
  } = options

  const text = ref('')
  let timer = null
  let wordIndex = 0
  let charIndex = 0
  let erasing = false

  function tick() {
    const word = words[wordIndex]

    if (!erasing) {
      charIndex += 1
      text.value = word.slice(0, charIndex)

      if (charIndex >= word.length) {
        erasing = true
        timer = setTimeout(tick, holdDelay)
      } else {
        timer = setTimeout(tick, typeDelay)
      }
      return
    }

    charIndex -= 1
    text.value = word.slice(0, charIndex)

    if (charIndex <= 0) {
      erasing = false
      wordIndex = (wordIndex + 1) % words.length
      timer = setTimeout(tick, typeDelay)
    } else {
      timer = setTimeout(tick, eraseDelay)
    }
  }

  onMounted(() => {
    timer = setTimeout(tick, startDelay)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })

  return { text }
}
