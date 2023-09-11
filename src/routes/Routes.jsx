import { createBrowserRouter } from "react-router-dom";
import { PublicLayouts } from "../layouts";
import { About, Home, Post, Contact, NotFound } from "../pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: '/About',
        element: <About />
      },
      {
        path: '/Post',
        element: <Post />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
    ]
  }
])

export {router}