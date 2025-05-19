"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { signIn, signUp, signInWithGoogle } from '@/lib/auth';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

const page = () => {

    const { user } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password, username);
            setUsername("")
            setEmail("")
            setPassword("")
            router.push("/")
            window.location.href = '/';
        } catch (err: any) {
        setError(err.message);
        alert(err.message)
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
        }
    };

    

  return (
    <div className='h-screen flex items-center justify-center bg-[url(/auth_bg.png)] bg-cover bg-center'>
        <div className='w-[600px] mt-10 py-15 px-20 border border-primary rounded-md bg-background/50 bg-opacity-50 backdrop-blur-lg flex flex-col'>
            <h1 className='text-[80px] font-display-condensed text-center uppercase text-neutral-50 '>Registro</h1>
            <form className='flex flex-col gap-6 mt-5'>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Nombre
                    <input type="text" required className='h-[55px] border border-primary p-2 rounded text-white' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Email
                    <input type="email" required className='h-[55px] border border-primary p-2 rounded text-white' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className='text-base text-white leading-none flex flex-col gap-4'>
                    Contraseña
                    <input type="password" required className='h-[55px] border border-primary p-2 rounded text-white' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="button" className='text-base text-background px-8 py-4 bg-primary rounded-md cursor-pointer' onClick={handleSubmit}>Registrarse</button>
                <button type="button" className='text-base text-background px-8 py-4 bg-[#f2f2f2] rounded-md cursor-pointer relative' onClick={handleGoogleLogin}>
                    <img src="/google_icon.svg" className='absolute top-[50%] translate-[-50%] left-10'/>
                    Sign up with Google
                </button>
                <p className='text-white text-base my-4'>Ya tienes una cuenta? <Link href="" className='underline text-primary'>Inicia Sesión</Link></p>
            </form>
        </div>
    </div>
  )
}

export default page