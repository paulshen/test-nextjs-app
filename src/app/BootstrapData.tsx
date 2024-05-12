import { headers } from "next/headers";
import { BootstrapDataClient } from "./BootstrapDataClient";

export type BootstrapData = {
  user: {
    name: string;
  };
  random: number;
};

export async function fetchBootstrapData(): Promise<BootstrapData> {
  const h = headers();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    user: { name: "paul" },
    random: Math.random(),
  };
}

export async function BootstrapDataComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const bootstrapData = await fetchBootstrapData();
  return (
    <div>
      <div>BootstrapData: {JSON.stringify(bootstrapData)}</div>
      <BootstrapDataClient data={bootstrapData}>{children}</BootstrapDataClient>
    </div>
  );
}
