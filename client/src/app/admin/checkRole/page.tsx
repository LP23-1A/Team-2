"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function CheckRole() {
  const { user } = useAuth0();
  const userEmail = user?.email;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleCheckRole = async () => {
      try {
        const api = "http://localhost:8000/admin/admincheck";
        const response = await axios.post(api, {
          email: userEmail,
        });
        const { data } = response;
        const email = data._doc.email;
        console.log(data._doc.role);
        if (data === userEmail) {
          // router.push("dashboard");
        } else {
          // router.push("sign");
        }
      } catch (err) {
        console.log(err, "axios error");
      } finally {
        setLoading(false);
      }
    };
    handleCheckRole();
  }, [userEmail]);

  if (loading) {
    return <></>;
  }

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </div>
  );
}
