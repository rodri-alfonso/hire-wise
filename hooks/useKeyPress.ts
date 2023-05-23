import { useEffect, useState } from 'react'

export default function useKeyPress (targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', downHandler)
    document.addEventListener('keyup', upHandler)

    return () => {
      document.removeEventListener('keydown', downHandler)
      document.removeEventListener('keyup', upHandler)
    }
  })

  return keyPressed
}
