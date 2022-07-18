import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoUrl: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        })
        .catch((error) => alert(error));
    });
  };
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv5NTn4Iw_QsC7kW0Lbw3LrlPcPAHso2l9A&usqp=CAU"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registered"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic Url (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
