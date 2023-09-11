import { v4 as uuidv4 } from 'uuid'

import { NavLink } from 'react-router-dom'

import { Navlist, Navitem } from '../Nav'
import { Button } from '../Button'

import styles from './Header.module.scss'

const navItems = [
  {
    name: 'Home',
    link: '/',
    isActive: true
  },
  {
    name: 'Post',
    link: '/Post',
    isActive: false
  },
  {
    name: 'Contact',
    link: '/Contact',
    isActive: false
  },
  {
    name: 'About',
    link: '/About',
    isActive: false
  }
]

function Header() {
  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_container}>
        <NavLink className={styles.navlink} to='/'>
          <div>
            <p>NEXT INVEST</p>
          </div>
        </NavLink>
          <div className={styles.navAction}>
            <Navlist>
              {navItems.map((item) => {
                return (
                  <Navitem key={uuidv4()} link={item.link} isActive={item.isActive}>
                    {item.name}
                  </Navitem>
                )
              })}
            </Navlist>
            <div className={styles.action}>
              <Button type='#5E4DCD'> Login </Button>
              <Button color='#5E4DCD'> Register </Button>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {Header}
