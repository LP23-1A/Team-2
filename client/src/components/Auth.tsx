"use client";
import React, { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
type Props = {
  children: ReactNode;
};
const AuthProvider = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain="dev-xgzfcxh7nwfo7arj.us.auth0.com"
      clientId="XoXEH8JmXaMDpSUrIl2KDtSqjiCRBikm"
      authorizationParams={{
        redirect_uri: window.location.origin + "/admin/dashboard" ,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
