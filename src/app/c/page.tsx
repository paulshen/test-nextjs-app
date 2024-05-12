import { headers } from "next/headers";
import Link from "next/link";

export default async function PageC() {
  const h = headers();
  await new Promise((resolve) => setTimeout(resolve, 300));
  const value = Math.random();
  return (
    <div>
      <div>Page C: {value}</div>
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
