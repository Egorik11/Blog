import { NavLink } from "react-router-dom"

import styles from './Navitem.module.scss'

function Navitem({children, link, closeMobileMenu}) {
  console.log(closeMobileMenu);
  return (
    <li className={styles.liStyle}>
      <NavLink to={link}>
        {children}
      </NavLink>
    </li>
  )
}

export { Navitem }