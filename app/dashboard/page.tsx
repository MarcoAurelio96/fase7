import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Navbar } from "@/components/navbar";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full mt-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Bienvenido al Área segura
          </h1>
          
          <p className="text-lg text-gray-600">
            Hola, <span className="font-semibold text-blue-600">{session?.user?.name || "Usuario"}</span>. 
            Tienes acceso completo a esta zona protegida.
          </p>

          <div className="mt-8 p-5 bg-blue-50/50 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Detalles de tu conexión segura:</h3>
            <ul className="text-sm text-blue-900 space-y-1">
              <li><strong>Email registrado:</strong> {session?.user?.email}</li>
              <li><strong>Método de entrada:</strong> {session?.user?.image ? "Google OAuth" : "Firebase Credentials"}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}