// Libraries
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
// Components

// Layouts
import IndexLayout from './layouts/IndexLayout';
// Pages
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route element={<IndexLayout />}>
          <Route index element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
