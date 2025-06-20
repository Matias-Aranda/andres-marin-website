'use client';

import { useState } from 'react';
import { uploadPfp } from '@/lib/uploadPfp';
import { useRouter } from 'next/navigation';

interface ToggleModalEvent extends React.MouseEvent<HTMLElement> {}
interface UploadPfpModalProps {
    togglePhotoModal: (e: React.MouseEvent<HTMLElement>) => void;
    setShowUploadModal?: (show: boolean) => void;
}

const UploadPfpModal: React.FC<UploadPfpModalProps> = ({ togglePhotoModal, setShowUploadModal }) => {

    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file));
        setLoading(true);

        try {
            const photoURL = await uploadPfp(file);
            console.log('Uploaded and updated profile:', photoURL);
        } catch (err) {
            console.error('Error uploading image:', err);
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        if (setShowUploadModal) {
            setShowUploadModal(false);
        }
        router.refresh();
    }


  return (
    <div className='top-0 left-0 z-[10] absolute flex justify-center items-center bg-[#0C0C1D]/50 w-full h-screen text-white'>
        <div className='top-0 left-0 z-6 absolute flex bg-[#0C0C1D]/90 w-full h-full' onClick={loading ? undefined : togglePhotoModal}></div>
        <div className='z-7 flex flex-col justify-center items-center gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg px-20 py-10 border border-primary/50 rounded-xl'>
            <h3 className='self-start text-primary text-2xl uppercase'>Subir imagen</h3>
            <div className='flex flex-col justify-center items-center gap-4 bg-[#101026]/50 px-25 py-10 rounded-lg'>
                <img src={preview ? preview : "/user_pfp.svg"} className='rounded-full w-[190px] h-[190px] object-cover'/>
                <p>Vista Previa</p>
                <input type="file" accept="image/*" onChange={handleFileChange} className='bg-primary hover:bg-primary/70 px-10 py-[6px] rounded w-50 text-black text-base cursor-pointer cursor-pointer' />
                <p className='text-white/50 text-sm'>PNG, JPG, JPEG, WEBP. MÁX 2MB</p>
            </div>
            <p onClick={loading ? undefined : closeModal} className={`text-primary ${!loading ? "cursor-pointer" : "cursor-default"} self-end text-[20px]`}>{loading ? "Cargando..." : `Listo`}</p>
        </div>
    </div>
  )
}

export default UploadPfpModal