import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra App</h1>
      <p className="text-gray-600 mb-8">Esta es la landing pública que todos pueden ver.</p>
      <Link 
        href="/dashboard" 
        className="text-blue-600 hover:underline font-medium"
      >
        Ir al Área Privada
      </Link>
    </main>
  );
}