import Link from "next/link";
import { User } from "../User";

export default function PageB() {
  return (
    <div>
      <div>Page B</div>
      <User />
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
