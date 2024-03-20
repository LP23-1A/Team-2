'use client'
import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";

export default function CheckRole() {
  const { user } = useAuth0();
  const userInfo = user?.email;  
  const router = useRouter();

  useEffect(() => {
    const handleCheckRole = async () => {
      try {
        const api = "http://localhost:8000/admin/admincheckrole";
        const response = await axios.post(api, {
          role: "admin", 
        });
        if (response.data.email === userInfo) {
          router.push("dashboard")
        } else {
          console.log("User does not have admin role");
        }
      } catch (err) {
        console.log(err, "axios error");
      }
    };
    handleCheckRole();
  }, [userInfo]);

  return <div>loading...</div>;
}
