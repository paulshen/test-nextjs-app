"use client";
import Link from "next/link";

export default function PageA() {
  return (
    <div>
      <div>Page A</div>
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
