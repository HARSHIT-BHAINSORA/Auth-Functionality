import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialData = { email: "", password: "" };
  const navigator = useNavigate();
  const [formDate, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formDate, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, formDate.email, formDate.password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user.email);
          navigator("/");
        }
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(
        auth,
        formDate.email,
        formDate.password
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigator("/");
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <form>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          reqiured="true"
          value={formDate.email}
          onChange={handleChange}
        />
        <lable>Password</lable>
        <input
          type="password"
          name="password"
          placeholder="password"
          reqiured="true"
          value={FormData.password}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button type="submit" onClick={handleRegistration}>
          Create a new account
        </button>
      </form>
    </div>
  );
}

export default Login;
