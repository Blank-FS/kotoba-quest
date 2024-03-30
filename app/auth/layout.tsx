import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full mt-8 flex justify-center">{children}</div>;
};

export default AuthLayout;
