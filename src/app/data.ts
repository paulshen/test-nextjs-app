export async function fetchUser() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    name: "paul",
  };
}
