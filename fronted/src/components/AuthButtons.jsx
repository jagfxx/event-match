"use client";
import Link from "next/link";
import { useAuth } from "../app/auth/AuthProvider"; 
import { useRouter } from "next/navigation";
import TypewriterClient from "./TypewriterClient";
import TypeWriterName from "./TypeWriterName";
export default function AuthButtons() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) return null; // evita parpadeo inicial

  if (user) {
    return (
      <div className="flex flex-col w-[200px] justify-center items-center gap-4">
        <TypeWriterName />
        <button
          onClick={() => {
            signOut();
            router.push("/"); // opcional: redirigir al home
          }}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[200px] justify-center items-center gap-4">
      <TypewriterClient />
      <Link href="/auth/login" className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition block text-center">
        Login
      </Link>
      <Link href="/auth/register" className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition block text-center">
        Register
      </Link>
    </div>
  );
}
