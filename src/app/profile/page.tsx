"use client";

import axios from "axios";
import toastFunction from "../toast";
import styles from "./profile.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  interface UserData {
    username: string;
    email: string;
  }

  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
  });
  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toastFunction("success", "Logout successfully!");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toastFunction("error", error.message);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response: any = await axios.get("/api/users/me");
        // console.log(response.data.data);
        setUserData(response.data.data);
      } catch (error: any) {
        console.log("Error in fetching user details.", error);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.message}>Welcome {userData.username}</h1>
      <div className={styles.details}>
        <h1 style={{ fontWeight: "bold" }}>Your Account Details</h1>
        <div>Username: {userData.username}</div>
        <div>Email: {userData.email}</div>
      </div>
      <div className={styles.logoutButtonContainer}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
