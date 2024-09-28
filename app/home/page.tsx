import { useProtectedRoute } from "@/auth/use-protected-route";

export default async function Home() {
  await useProtectedRoute();

  return <div>You were redirected here because you&apos;re logged in!</div>;
}
