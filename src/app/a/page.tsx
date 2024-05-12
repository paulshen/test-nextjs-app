import Link from "next/link";
import { ClientRenderBootstrapDataExample } from "../BootstrapDataClient";

export default function PageA() {
  return (
    <div>
      <div>Page A</div>
      <ClientRenderBootstrapDataExample />
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
