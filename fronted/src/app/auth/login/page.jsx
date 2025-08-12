
'use client'
import Link from "next/link";
import TypewriterClient from '../../../components/TypewriterClient';
import { useState } from "react";
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        console.log(email, password);
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                console.log('Login successful');
                localStorage.setItem('token', data.token);
                window.location.href = '/dashboard';
            } else {
                if(response.status === 401){
                    setErrorMsg('Credenciales invalidas', data.message || data.error);
                }
                else{
                    setErrorMsg('Error al iniciar sesión', data.message || data.error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="w-screen h-screen flex flex-col gap-[20px] w-full justify-center items-center">
            <TypewriterClient />
            <div className="flex flex-col  w-[200px] justify-center items-center">
                <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
                    <input className="p-2 rounded bg-[#ffffff] placeholder:text-gray-500 text-[#181818]" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="p-2 rounded bg-[#ffffff] placeholder:text-gray-500 text-[#181818]" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-[#ffffff] text-black p-2 rounded hover:bg-[#cccccc] cursor-pointer transition duration-300 ease-in-out text-center w-full" type="submit">Login</button>
                </form>
                <Link className="hover:text-blue-500 p-2 text-bold font-light" href="/auth/register">Olvidaste tu contraseña?</Link>
                {errorMsg && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded mt-3 text-center w-full text-sm">
                        {errorMsg}
                    </div>
                )}
            </div>
        </section>
    );
}