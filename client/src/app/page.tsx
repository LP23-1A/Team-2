"use client";
import Login from "../app/admin/login/page";
import { useAuth0 } from "@auth0/auth0-react";
const home = () => {
  const { user } = useAuth0();
  console.log(user);
  return <div>
     <Login></Login>
     
     </div>
};

export default home;
