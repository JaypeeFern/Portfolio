// Libraries
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom"
// Layouts
import IndexLayout from './layouts/IndexLayout'
// Pages
import Homepage from "./pages/Homepage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<IndexLayout />}>
            <Route index element={<Homepage/>}/>
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App
