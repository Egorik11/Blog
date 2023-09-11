import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'

function PublicLayouts() {
  return (
    <>
      <Header />
      
      <Outlet />

      <footer>
        footer
      </footer>
    </>
  )
}

export {PublicLayouts}