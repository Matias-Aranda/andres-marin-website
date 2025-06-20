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
    <div className='top-0 left-0 z-[10] fixed flex justify-center items-center bg-[#0C0C1D]/50 w-full h-screen text-white'>
        <div className='top-0 left-0 z-6 absolute flex bg-[#0C0C1D]/90 w-full h-full' onClick={toggleDeleteModal}></div>
        <div className='z-7 flex flex-col justify-center items-center gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg px-20 py-10 pt-15 border border-[#A93A32] rounded-xl'>
            <h3 className='self-start text-[#A93A32] text-2xl uppercase'>Seguro que deseas eliminar tu cuenta? esta accion no se puede revertir</h3>
            <div className='flex flex-col justify-between items-end gap-4'>
                <label className='flex flex-col gap-4 mt-3 text-white text-base leading-none'>
                    Confirma tu contraseña
                    <input onChange={(e) => setPassword(e.target.value)} type="password" required className='self-start disabled:bg-white/5 p-2 border border-[#A93A32] disabled:border-[#A93A32]/20 rounded w-100 h-[55px] text-white disabled:text-white/40 tracking-[.2rem]'/>
                </label>
                <button onClick={(e) => handleDelete(e)} className='bg-[#A93A32] hover:bg-[#A93A32]/70 mt-6 px-10 py-3 rounded w-full text-white text-base cursor-pointer'>Eliminar mi cuenta</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteAccountModal