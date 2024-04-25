import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { auth } from "../firebase";

function App() {
  const [user, setUser] = useState("");
  const LogoutUser = () => {
    console.log("hi");
    setUser("");
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    // Clean up subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} LogoutUser={LogoutUser} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
