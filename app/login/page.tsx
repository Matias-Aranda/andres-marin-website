"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { signIn, signUp, signInWithGoogle } from '@/lib/auth';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

export default function page() {

    const { user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            setEmail("")
            setPassword("")
            router.push("/")
        } catch (err: any) {
            let message = "Ocurrió un error. Por favor, intentá nuevamente.";

            if (err.code === "auth/email-already-in-use") {
                message = "Este correo ya está registrado.";
            } else if (err.code === "auth/invalid-email") {
                message = "Por favor, ingresa un correo electrónico válido.";
            } else if (err.code === "auth/weak-password") {
                message = "La contraseña debe tener al menos 6 caracteres.";
            } else if (err.code === "auth/missing-password") {
                message = "Por favor, ingresa una contraseña.";
            } else if (err.code === "auth/operation-not-allowed") {
                message = "El tipo de autenticación no está habilitado.";
            } else if (err.code === "auth/too-many-requests") {
                message = "Demasiados intentos fallidos. Inténtalo de nuevo más tarde.";
            } else if (err.code === "auth/network-request-failed") {
                message = "Error de red. Verifica tu conexión a internet.";
            } else if (err.code === "auth/internal-error") {
                message = "Ocurrió un error interno. Intentalo de nuevo más tarde.";
            } else if (err.code === "auth/invalid-credential") {
                message = "Credenciales inválidas. Verifica los datos ingresados.";
            } else if (err.code === "auth/user-disabled") {
                message = "Este usuario ha sido deshabilitado.";
            } else if (err.code === "auth/user-not-found") {
                message = "Usuario no encontrado. Verifica el correo ingresado.";
            } else if (err.code === "auth/wrong-password") {
                message = "Contraseña incorrecta.";
            }
            
            setError(message);
        }
    };

    const handleGoogleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithGoogle();
            router.push("/")
        } catch (err: any) {
        setError(err.message);
        alert(err.message);
        }
    };

  return (
    <div className='sm:py-25 flex items-center justify-center bg-[url(/auth_bg.png)] bg-cover bg-center'>
        <div className='w-full sm:w-[600px] h-screen sm:h-fit py-15 px-5 sm:px-20 sm:border border-primary rounded-md bg-background/50 bg-opacity-50 backdrop-blur-lg flex flex-col'>
            <h1 className='text-[80px] font-display-condensed text-center uppercase text-neutral-50 '>Log in</h1>
            <form className='flex flex-col gap-6 mt-5'>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Email
                    <input type="email" className='h-[55px] border border-primary p-2 rounded text-white' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Contraseña
                    <input type="password" className='h-[55px] border border-primary p-2 rounded text-white' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                {error && <p className='text-[#A93A32] text-base my-4'>{error}</p>}
                <Link href="" className='underline text-white text-base'>Olvidaste tu contraseña?</Link>
                <button type="button" className='text-base text-background px-8 py-4 bg-primary rounded-md cursor-pointer' onClick={handleSubmit}>Log In</button>
                <button type="button" className='text-base text-background px-8 py-4 bg-[#f2f2f2] rounded-md cursor-pointer relative' onClick={handleGoogleLogin}>
                    <img src="/google_icon.svg" className='absolute top-[50%] translate-[-50%] left-10'/>
                    Sign in with Google
                </button>
                <p className='text-white text-base my-4'>No tienes una cuenta? <Link href="" className='underline text-primary'>Registrate</Link></p>
            </form>
        </div>
    </div>
  )
}
