import { v4 as uuidv4 } from 'uuid'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/images/NEXT INVEST.png'

import { Navlist, Navitem } from '../Nav'

import { Dialog } from '@headlessui/react'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = ()=> {
    setMobileMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <NavLink to='/'>
          <img src={Logo} alt="Next Invest" />
        </NavLink>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <span className="h-6 w-6 material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Navlist>
          {navItems.map((item) => {
            return (
              <Navitem key={uuidv4()} link={item.link} isActive={item.isActive}>
                {item.name}
              </Navitem>
            )
          })}
        </Navlist>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <NavLink to='/'>
            <img src={Logo} alt="Next Invest" />
          </NavLink>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <span className="h-6 w-6 material-symbols-outlined">
              close
            </span>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Navlist menu={mobileMenuOpen.toString()}>
                {navItems.map((item) => {
                  return (
                    <Navitem key={uuidv4()} link={item.link} isActive={item.isActive} close={closeMobileMenu}>
                      {item.name}
                    </Navitem>
                  )
                })}
              </Navlist>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}

export {Header}