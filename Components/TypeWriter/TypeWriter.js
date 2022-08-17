import { useEffect, useRef, useState } from 'react'
import Keyframes from '../Keyframes'
import styles from './typewriter.module.css'

const TypeWriter = ({ text, seconds = 3, fontSize = 'inherit' }) => {
  const [backgroundColor, setBgColor] = useState(null)
  const [animation, setAnimation] = useState(null)
  const [blink, setBlink] = useState(null)
  const ref = useRef()
  useEffect(() => {
    const parent = ref.current.parentElement
    setBgColor(window.getComputedStyle(parent).backgroundColor)
    const twAnimation = `typewriter ${seconds + 's'} steps(${text.length}) 0.5s forwards`
    setAnimation(twAnimation)
    setBlink(`blink 600ms steps(${text.length}) infinite`)
  }, [seconds, text.length])

  console.log([animation, blink].join(', '))

  console.log({ backgroundColor })

  return (
    <div ref={ref} style={{ fontSize }} className={styles.typewriter}>
      <Keyframes name="typewriter" from={{ left: '0%' }} to={{ left: '100%' }} />
      <Keyframes name="blink" to={{ backgroundColor: 'transparent' }} />
      <div style={{ backgroundColor, animation }} className={styles.before}></div>
      <div className={styles.content}>{text}</div>
      <div style={{ animation: [animation, blink].join(', ') }} className={styles.after}></div>
    </div>
  )
}

export default TypeWriter
