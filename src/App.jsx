import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ROUTES from "./Router/router"
import "./Styles/style.scss"
const router = createBrowserRouter(ROUTES)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
