import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserMenu } from "@/components/user-menu";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center min-w-75">
        <h1 className="text-3xl font-bold mb-2">Área VIP</h1>
        
        <p className="text-lg">
          Bienvenido, <span className="font-semibold text-blue-600">{session?.user?.name}</span>
        </p>
        <p className="text-sm text-gray-500">
          Email verificado: {session?.user?.email}
        </p>

        <UserMenu />
      </div>
    </main>
  );
}