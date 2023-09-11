import styles from './Navlist.module.scss'

function Navlist({children}) {
  return (
    <nav>
      <ul className={styles.navlist}>
        {children}
      </ul>
    </nav>
  )
}

export {Navlist}