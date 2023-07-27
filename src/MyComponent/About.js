import { Outlet } from "react-router-dom";

import React from "react";

export default function About() {
  return (
    <>
      <h1>This is a Restaurant App</h1>
      <Outlet />
    </>
  );
}
