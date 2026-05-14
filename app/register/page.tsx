"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      alert("¡Usuario registrado con éxito!");
      
      router.push("/login");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error inesperado.");
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">Registro</CardTitle>
          <CardDescription>Crea una nueva cuenta de usuario</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full">Registrarse</Button>
            
            <p className="text-sm text-center text-gray-500 mt-4">
              ¿Ya tienes cuenta? <Link href="/login" className="text-blue-600 hover:underline">Inicia sesión</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}