import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/shared/Header/Header";
import Home from "./Pages/Home/Home";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import AddPlaces from "./Pages/AddPlaces/AddPlaces";
import ManagePlaces from "./ManagePlaces/ManagePlaces";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/myOrders"
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/managePlaces/:serviceId" element={<ManagePlaces />} />
          <Route path="/addPlaces" element={<AddPlaces />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
