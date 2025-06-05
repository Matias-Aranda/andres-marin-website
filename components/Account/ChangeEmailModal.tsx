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
        <div className='fixed h-screen w-full top-0 left-0 flex items-center justify-center bg-[#0C0C1D]/50 text-white z-[10]'>
            <div className='absolute h-full w-full top-0 left-0 flex bg-[#0C0C1D]/90 z-6' onClick={toggleEmailModal}></div>
            <div className='flex flex-col gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg rounded-xl items-center justify-center py-10 px-20 pt-15 border border-primary/50 z-7'>
                <h3 className='uppercase self-start text-primary text-2xl'>Cambiar dirección de Email</h3>
                <div className='flex flex-col justify-between items-end gap-4'>
                    <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                        Nuevo Email
                        <input onChange={(e) => setNewEmail(e.target.value)} type="text" required className='h-[55px] border border-primary p-2 rounded text-white self-start w-100 disabled:bg-white/5 disabled:border-primary/20 disabled:text-white/40'/>
                    </label>
                    <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                        Contraseña
                        <input onChange={(e) => setPassword(e.target.value)} type="password" required className='h-[55px] tracking-[.2rem] border border-primary p-2 rounded text-white self-start w-100 disabled:bg-white/5 disabled:border-primary/20 disabled:text-white/40'/>
                    </label>
                    <button onClick={(e) => handleEmailChange(e)} className='bg-primary text-black hover:bg-primary/70 cursor-pointer text-base py-3 px-10 w-full mt-6 rounded'>Cambiar</button>
                </div>
                <p onClick={loading ? undefined : closeModal}  className={`text-primary ${!loading ? "cursor-pointer" : "cursor-default"} self-end text-[20px]`}>{loading ? "" : `Listo`}</p>
            </div>
        </div>
    )
  }

export default ChangeEmailModal