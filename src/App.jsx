import {Routes, Route, Link} from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { NotFound } from './pages'

import { PublicLayouts } from './layouts'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<PublicLayouts/>}>
          <Route index element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='*' element={<NotFound />}/>
        </Route>
     </Routes>
    </>
  )
}

export default App
