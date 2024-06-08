import { useAuthStore } from "@/hooks/useAuthStore";

export default function AppRenderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFetchingLoginStatus } = useAuthStore();
  return (
    <>{isFetchingLoginStatus ? <div>Checking auth...</div> : <>{children}</>}</>
  );
}
