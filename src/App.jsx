import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Bill from "./components/Bill"

function App() {

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Navbar/>}></Route>
        <Route path="/bill"element={<Bill/>}></Route>
        </Routes>      
      </BrowserRouter>
    </>
  
  )
}

export default App
