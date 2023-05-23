import { Routes, Route, Navigate } from "react-router-dom"
import { Footer } from "./components"
import { getAuth } from "firebase/auth"

import {
  Login,
  Register,
  LandingPage,
  Dashboard,
  MenuResto,
  FindResto,
  Checkout,
  Delivery,
  Profile,
} from "./pages"
import PrivateRoutes from "./components/PrivateRoutes"


const App = () => {
  var user = getAuth().currentUser;

  // if(!user) return <Navigate to={'/login'}/>

  return (
    <div>
      <Routes>
        {/* Route for user that never logged in */}
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/rm-pak-aziz" element={<MenuResto />} />
        <Route path="/search" element={<FindResto />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:menu" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}



export default App
