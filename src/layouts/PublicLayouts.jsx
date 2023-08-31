import { Link, Outlet } from 'react-router-dom'

function PublicLayouts() {
  return (
    <>
      <header>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/NotFound">NotFound</Link>
      </header>

      <Outlet />

      <footer>
        footer
      </footer>
    </>
  )
}

export {PublicLayouts}