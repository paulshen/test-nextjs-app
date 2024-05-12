import Link from "next/link";
import { ClientRenderBootstrapDataExample } from "../BootstrapDataClient";

export default function PageB() {
  return (
    <div>
      <div>Page B</div>
      <ClientRenderBootstrapDataExample />
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
