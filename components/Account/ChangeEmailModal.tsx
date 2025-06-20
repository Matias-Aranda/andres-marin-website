import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { changeUserEmail } from '@/lib/auth';

interface ToggleModalEvent extends React.MouseEvent<HTMLElement> {}
interface ChangeEmailModalProps {
    toggleEmailModal: (e: React.MouseEvent<HTMLElement>) => void;
    setShowEmailModal?: (show: boolean) => void;
}

const ChangeEmailModal: React.FC<ChangeEmailModalProps> = ({ toggleEmailModal, setShowEmailModal }) => {
    const { user } = useAuth()
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await changeUserEmail(newEmail, password);
      setMessage("Email updated successfully!");
      setLoading(false);
    } catch (error: any) {
        alert("Error updating email: " + error.message);
      setMessage(error.message || "Error updating email");
    }
  };
    
    const closeModal = () => {
        if (setShowEmailModal) {
            setShowEmailModal(false);
        }
        router.refresh();
    }

    return (
        <div className='top-0 left-0 z-[10] fixed flex justify-center items-center bg-[#0C0C1D]/50 w-full h-screen text-white'>
            <div className='top-0 left-0 z-6 absolute flex bg-[#0C0C1D]/90 w-full h-full' onClick={toggleEmailModal}></div>
            <div className='z-7 flex flex-col justify-center items-center gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg px-20 py-10 pt-15 border border-primary/50 rounded-xl'>
                <h3 className='self-start text-primary text-2xl uppercase'>Cambiar dirección de Email</h3>
                <div className='flex flex-col justify-between items-end gap-4'>
                    <label className='flex flex-col gap-4 mt-3 text-white text-base leading-none'>
                        Nuevo Email
                        <input onChange={(e) => setNewEmail(e.target.value)} type="text" required className='self-start disabled:bg-white/5 p-2 border border-primary disabled:border-primary/20 rounded w-100 h-[55px] text-white disabled:text-white/40'/>
                    </label>
                    <label className='flex flex-col gap-4 mt-3 text-white text-base leading-none'>
                        Contraseña
                        <input onChange={(e) => setPassword(e.target.value)} type="password" required className='self-start disabled:bg-white/5 p-2 border border-primary disabled:border-primary/20 rounded w-100 h-[55px] text-white disabled:text-white/40 tracking-[.2rem]'/>
                    </label>
                    <button onClick={(e) => handleEmailChange(e)} className='bg-primary hover:bg-primary/70 mt-6 px-10 py-3 rounded w-full text-black text-base cursor-pointer'>Cambiar</button>
                </div>
                <p onClick={loading ? undefined : closeModal}  className={`text-primary ${!loading ? "cursor-pointer" : "cursor-default"} self-end text-[20px]`}>{loading ? "" : `Listo`}</p>
            </div>
        </div>
    )
  }

export default ChangeEmailModal