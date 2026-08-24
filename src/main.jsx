import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { myRouter } from "./routes";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
)
