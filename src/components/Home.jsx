import React from "react";
import { Link } from "react-router-dom";

function Home({ user, LogoutUser }) {
  console.log(user.email);
  const Logout = () => {
    LogoutUser();
  };
  return (
    <div>
      {!user ? (
        <>
          <h1>No User Present</h1>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <h1>Hello , {user.email} welcome to our Home page</h1>
          <button onClick={() => Logout()}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Home;
