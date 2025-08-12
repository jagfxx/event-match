"use client";
import Typewriter from "typewriter-effect";
import { useAuth } from "../app/auth/AuthProvider"; // <- ajusta la ruta si hace falta

export default function TypeWriterName() {
  const { user, loading } = useAuth();
  console.log("TypeWriter user:", user); // <- mira esto en la consola

  if (loading) return null;

  const name = user?.name || "Invitado";

  return (
    <span className="flex text-4xl font-bold">
      Hola,&nbsp;
      <Typewriter
        options={{
          strings: [name],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
}


