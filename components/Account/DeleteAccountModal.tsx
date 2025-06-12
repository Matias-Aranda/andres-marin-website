import React, { useState } from 'react'
import { getAuth, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

interface ToggleModalEvent extends React.MouseEvent<HTMLElement> {}
interface ChangeDeleteModalProps {
    toggleDeleteModal: (e: React.MouseEvent<HTMLElement>) => void;
    setShowDeleteModal?: (show: boolean) => void;
}

const DeleteAccountModal: React.FC<ChangeDeleteModalProps> = ({ toggleDeleteModal, setShowDeleteModal }) => {

    const { user } = useAuth()
    const router = useRouter();
    const [password, setPassword] = useState("");

    const credential = EmailAuthProvider.credential(
        user?.email || "",
        password
    );


    const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(user){
            reauthenticateWithCredential(user, credential)
            .then(() => {
                return user.delete();
            })
            .then(() => {
                console.log("User reauthenticated and deleted");
                if (setShowDeleteModal) {
                    setShowDeleteModal(false);
                }
                router.push("/");
            })
            .catch((error) => {
                console.error("Error during reauth or delete:", error);
            });
        }
    }

  return (
    <div className='fixed h-screen w-full top-0 left-0 flex items-center justify-center bg-[#0C0C1D]/50 text-white z-[10]'>
        <div className='absolute h-full w-full top-0 left-0 flex bg-[#0C0C1D]/90 z-6' onClick={toggleDeleteModal}></div>
        <div className='flex flex-col gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg rounded-xl items-center justify-center py-10 px-20 pt-15 border border-[#A93A32] z-7'>
            <h3 className='uppercase self-start text-[#A93A32] text-2xl'>Seguro que deseas eliminar tu cuenta? esta accion no se puede revertir</h3>
            <div className='flex flex-col justify-between items-end gap-4'>
                <label className='text-base text-white leading-none flex flex-col gap-4 mt-3'>
                    Confirma tu contraseña
                    <input onChange={(e) => setPassword(e.target.value)} type="password" required className='h-[55px] tracking-[.2rem] border border-[#A93A32] p-2 rounded text-white self-start w-100 disabled:bg-white/5 disabled:border-[#A93A32]/20 disabled:text-white/40'/>
                </label>
                <button onClick={(e) => handleDelete(e)} className='bg-[#A93A32] text-white hover:bg-[#A93A32]/70 cursor-pointer text-base py-3 px-10 w-full mt-6 rounded'>Eliminar mi cuenta</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteAccountModal