import Link from "next/link";
import { User } from "../User";

export default function PageA() {
  return (
    <div>
      <div>Page A</div>
      <User />
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
