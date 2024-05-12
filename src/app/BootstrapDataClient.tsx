"use client";
import { BootstrapData } from "./BootstrapData";

// pretend this is some global state (eg zustand)
let bootstrapData: BootstrapData | undefined;

export function BootstrapDataClient({
  data,
  children,
}: {
  data: BootstrapData;
  children: React.ReactNode;
}) {
  if (bootstrapData === undefined) {
    bootstrapData = data;
  }
  return <>{children}</>;
}

export function ClientRenderBootstrapDataExample() {
  return <div>client: {JSON.stringify(bootstrapData)}</div>;
}
