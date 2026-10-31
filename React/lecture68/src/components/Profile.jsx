import React from "react";
import withAuth from "../utils/withAuth";

function Profile({ name, role }) {
  return (
    <div>
      <h1>Profile page</h1>
      <p>Name : {name}</p>
      <p>Role : {role}</p>
    </div>
  );
}

export const AuthProfile = withAuth(Profile);
