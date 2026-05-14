import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "tu@email.com" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const res = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
                returnSecureToken: true,
              }),
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = await res.json();

          if (!res.ok) {
            console.error("Error de Firebase:", data.error.message);
            return null;
          }

          return {
            id: data.localId,
            email: data.email,
            name: data.displayName || "Usuario de Firebase", 
          };
        } catch (error) {
          console.error("Error en la petición a Firebase:", error);
          return null;
        }
      }
    })
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };