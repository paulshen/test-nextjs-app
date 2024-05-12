"use client";
import { createContext } from "react";

export const RootDataContext = createContext({});

export function RootDataProvider({
  data,
  children,
}: {
  data: any;
  children: React.ReactNode;
}) {
  return (
    <RootDataContext.Provider value={data}>{children}</RootDataContext.Provider>
  );
}
