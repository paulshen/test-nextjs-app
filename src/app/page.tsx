import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/a">A</Link>
      </div>
      <div>
        <Link href="/b">B</Link>
      </div>
      <div>
        <Link href="/c">C</Link>
      </div>
    </div>
  );
}
