
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {routes} from './RouterConfig'



function App() {
 

  return (
    <BrowserRouter>
   
     {
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          }
   
    </BrowserRouter>
  )
}

export default App
