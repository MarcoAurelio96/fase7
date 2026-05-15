"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center border-b">
      <div className="font-bold text-xl tracking-tight text-blue-600">
        MiProyecto
      </div>
      
      <div className="flex items-center gap-4">
        {session?.user?.email && (
          <span className="text-sm text-gray-600 hidden md:block">
            {session.user.email}
          </span>
        )}
        
        {session?.user?.image && (
          <Image 
            src={session.user.image} 
            alt="Avatar" 
            width={36} 
            height={36} 
            className="rounded-full border border-gray-200"
          />
        )}
        
        <Button 
          variant="destructive" 
          size="sm"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Cerrar sesión
        </Button>
      </div>
    </nav>
  );
}