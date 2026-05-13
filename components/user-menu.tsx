"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-gray-500 mt-4">Cargando datos...</p>;
  if (!session) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {session.user?.image && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img 
          src={session.user.image} 
          alt="Avatar de usuario" 
          className="w-16 h-16 rounded-full shadow-sm"
        />
      )}
      
      <Button 
        onClick={() => signOut({ callbackUrl: "/" })} 
        variant="destructive"
      >
        Cerrar sesión
      </Button>
    </div>
  );
}