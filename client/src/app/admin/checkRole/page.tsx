"use client";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CheckRole() {
  const { user } = useAuth0();
  const userEmail = user?.email;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCheckRole = async () => {
      try {
        const api = "http://localhost:8000/admin/checkrole";
        const response = await axios.post(api, {
          email: userEmail,
        });
        const userRole = response.data.role;
        if (userRole === "admin") {
          router.push("dashboard");
        } else if (userRole === "user") {
          router.push("../../user/dashboard");
        } else {
          console.log("user not found");
        }
      } catch (err) {
        console.log(err, "axios error");
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      handleCheckRole();
    } else {
      setLoading(false);
    }
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
