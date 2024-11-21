import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    return <div className="text-white">No tienes acceso a esta página</div>;
  }

  return <div className="text-white">Dashboard</div>;
}
