import { RootDataProvider } from "./RootDataProvider";
import { fetchUser } from "./data";

export async function RootData({ children }: { children: React.ReactNode }) {
  const user = await fetchUser();
  return (
    <div>
      <div>RootData: {user.name}</div>
      <RootDataProvider data={user}>{children}</RootDataProvider>
    </div>
  );
}
