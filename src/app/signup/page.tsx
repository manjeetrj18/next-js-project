"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";
import styles from "./signup.module.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userDataIsTouched, setUserDataIsTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
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

  const isFieldValid = (fieldName: String, fieldLength: number) => {
    return fieldName.trim().length >= fieldLength;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let emailIsValid = false;
  emailIsValid = userDataIsTouched.email && emailRegex.test(userData.email);

  const handleSignupSubmit = async (e: any) => {
    e.preventDefault();
    // Handle signup logic here, e.g., sending the data to the backend

    console.log(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSignupSubmit}>
        <h2 className={styles.heading}>Sign Up</h2>
        <label htmlFor="username" />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          className={`${styles.input} ${
            userDataIsTouched.username && !isFieldValid(userData.username, 2)
              ? styles.error
              : styles.correct
          } ${
            userDataIsTouched.username && !isFieldValid(userData.username, 2)
              ? styles.shake
              : ""
          }`}
        />
        <div
          className={`${styles["error-message"]} ${
            userDataIsTouched.username && !isFieldValid(userData.username, 2)
              ? styles["error-visible"]
              : ""
          }`}
        >
          Username must be atleast 2 character long.
        </div>
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
            userDataIsTouched.password && !isFieldValid(userData.password, 6)
              ? styles.error
              : styles.correct
          } ${
            userDataIsTouched.password && !isFieldValid(userData.password, 6)
              ? styles.shake
              : ""
          }`}
        />
        <div
          className={`${styles["error-message"]} ${
            userDataIsTouched.password && !isFieldValid(userData.password, 6)
              ? styles["error-visible"]
              : ""
          }`}
        >
          password must be atleast 6 character long.
        </div>
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleChange}
          className={`${styles.input} ${
            userDataIsTouched.confirmPassword &&
            !(userData.password === userData.confirmPassword)
              ? styles.error
              : styles.correct
          } ${
            userDataIsTouched.confirmPassword &&
            !(userData.password === userData.confirmPassword)
              ? styles.shake
              : ""
          }`}
        />
        <div
          className={`${styles["error-message"]} ${
            userDataIsTouched.confirmPassword &&
            !(userData.password === userData.confirmPassword)
              ? styles["error-visible"]
              : ""
          }`}
        >
          Confirm Password must be same as password.
        </div>
        <button type="submit" className={styles.signupButton}>
          Sign Up
        </button>
        <div className={styles["login-link"]}>
          <p>
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
