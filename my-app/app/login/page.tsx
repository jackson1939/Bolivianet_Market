"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 p-2 border w-full"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}