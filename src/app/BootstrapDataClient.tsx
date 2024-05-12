"use client";

// pretend this is some global state (eg zustand)
let bootstrapData: any | undefined;

export function BootstrapDataClient({
  data,
  children,
}: {
  data: any;
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
