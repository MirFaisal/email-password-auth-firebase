"use client";

import firebase_App from "@/utils/firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  // email & password state
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  // firebase auth
  const auth = getAuth(firebase_App);

  //submit handelar
  const handelRegister = (e) => {
    e.preventDefault();

    // email and password register with firebase
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  //email change on bulr
  const onChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  // password change on change
  const onChangePasswoed = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-5xl font-bold text-blue-400">
          {" "}
          Email & Password Auth
        </h1>
        <h3 className="mt-5 text-3xl font-bold text-blue-400">Register</h3>
      </div>

      <div
        className=" flex
       justify-center"
      >
        <form
          onSubmit={() => handelRegister(event)}
          className="flex flex-col items-start w-1/3  space-y-2 mt-7"
        >
          <label htmlFor="">Email:</label>
          <input
            onBlur={onChangeEmail}
            type="email"
            name="email"
            placeholder="Enter your Email"
            className=" border
                   border-black w-full"
          />

          <label htmlFor="">Password:</label>
          <input
            onChange={onChangePasswoed}
            type="password"
            name="password"
            placeholder="Enter your Password"
            className=" border
                   border-black w-full"
          />
          <button
            type="submit"
            className="py-2 px-5 bg-blue-400 font-bold text-white"
          >
            Register
          </button>
          <Link className="text-blue-300" href="/login">
            {" "}
            Already have an account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Home;
