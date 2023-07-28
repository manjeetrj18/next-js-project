"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

import styles from "../signup/signup.module.css";

export default function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [userDataIsTouched, setUserDataIsTouched] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData(() => ({
      ...userData,
      [name]: value,
    }));

    setUserDataIsTouched(() => ({
      ...userDataIsTouched,
      [name]: true,
    }));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailIsValid = false;
  emailIsValid = userDataIsTouched.email && emailRegex.test(userData.email);

  let passwordIsValid = false;
  passwordIsValid = userData.password.trim().length >= 6;

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    // Handle signup logic here, e.g., sending the data to the backend
    console.log(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLoginSubmit}>
        <h2 className={styles.heading}>Login</h2>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className={`${styles.input} ${
            userDataIsTouched.email && !emailIsValid
              ? styles.error
              : styles.correct
          } ${userDataIsTouched.email && !emailIsValid ? styles.shake : ""}`}
        />
        <div
          className={`${styles["error-message"]} ${
            userDataIsTouched.email && !emailIsValid
              ? styles["error-visible"]
              : ""
          }`}
        >
          Please enter a valid email address.
        </div>
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className={`${styles.input} ${
            userDataIsTouched.password && !passwordIsValid
              ? styles.error
              : styles.correct
          } ${
            userDataIsTouched.password && !passwordIsValid ? styles.shake : ""
          }`}
        />
        <div
          className={`${styles["error-message"]} ${
            userDataIsTouched.password && !passwordIsValid
              ? styles["error-visible"]
              : ""
          }`}
        >
          password must be atleast 6 character long.
        </div>
        <button type="submit" className={styles.signupButton}>
          Login
        </button>
        <div className={styles["login-link"]}>
          <p>
            Do not have an account? <Link href="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
