"use client";
import { useAuth0 } from "@auth0/auth0-react";
const home = () => {
  const { user } = useAuth0();
  console.log(user);
  return <div>cbx</div>;
};

export default home;
