// import Navbar from "./components/Navbar"
// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Bill from "./components/Bill"
import { app } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const signupUser=()=>{
  createUserWithEmailAndPassword(auth, "devnajani@gmail.com","devna123")  
  .then((userCredential) => {


})}
const auth = getAuth(app);

function App() {

  return (
    <>
    {/* <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Navbar/>}></Route>
        <Route path="/bill"element={<Bill/>}></Route>
        </Routes>      
      </BrowserRouter>
    </> */}
    <button onClick={signupUser}>create user</button>
    </>
  )
}

export default App
