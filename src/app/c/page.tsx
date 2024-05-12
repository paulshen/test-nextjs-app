import { headers } from "next/headers";
import Link from "next/link";
import { ClientRenderBootstrapDataExample } from "../BootstrapDataClient";

export default async function PageC() {
  const h = headers();
  await new Promise((resolve) => setTimeout(resolve, 300));
  const value = Math.random();
  return (
    <div>
      <div>Page C: {value}</div>
      <ClientRenderBootstrapDataExample />
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
