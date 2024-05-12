"use client";

import { useContext } from "react";
import { RootDataContext } from "./RootDataProvider";

export function User() {
  const user: any = useContext(RootDataContext);
  return <div>User: {user.name}</div>;
}
