import Icon from '../IconMaterial'
import useColorScheme from '../../hooks/useColorScheme'
import styles from './toggler.module.css'

const ThemeToggler = () => {
  const { setColorScheme, toggleColorScheme, scheme } = useColorScheme()

  return (
    <div className={[styles.toggler, 'theme-toggler'].join(' ')}>
      <Icon className={scheme === 'light' ? 'active' : ''} onClick={() => setColorScheme('light')}>
        light_mode
      </Icon>
      <Icon className={scheme === 'dark' ? 'active' : ''} onClick={() => setColorScheme('dark')}>
        dark_mode
      </Icon>
    </div>
  )
}

export default ThemeToggler
