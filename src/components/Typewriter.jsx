import { useState, useEffect } from 'react'

export default function Typewriter({ words = [], delay = 150, deleteDelay = 80, pause = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentWord.slice(0, currentText.length + 1))
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteDelay : delay)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteDelay, pause])

  return (
    <span className="inline-flex items-center">
      <span>{currentText}</span>
      <span className="w-0.5 h-6 sm:h-8 ml-1 bg-brand-500 animate-pulse" />
    </span>
  )
}
