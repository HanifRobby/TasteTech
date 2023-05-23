import { Routes, Route, Navigate } from "react-router-dom"
import { Footer } from "./components"
import { getAuth } from "firebase/auth"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

const App = () => {
  var user = getAuth().currentUser;

  // if(!user) return <Navigate to={'/login'}/>

  return (
    <div>
      <Routes>
        {/* Route for user that never logged in */}
        <Route element={<ScrollToTop />}>
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/rm-pak-aziz" element={<MenuResto />} />
            <Route path="/search" element={<FindResto />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:menu" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}



export default App
