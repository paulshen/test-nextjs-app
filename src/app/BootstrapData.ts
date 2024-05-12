import { headers } from "next/headers";

export type BootstrapData = {
  user: {
    name: string;
  };
};

export async function fetchBootstrapData(): Promise<BootstrapData> {
  const h = headers();
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    user: { name: "paul" },
  };
}
