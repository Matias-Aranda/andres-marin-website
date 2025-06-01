'use client';

import { useState } from 'react';
import { uploadPfp } from '@/lib/uploadPfp';
import { useRouter } from 'next/navigation';

interface ToggleModalEvent extends React.MouseEvent<HTMLElement> {}
interface UploadPfpModalProps {
    toggleModal: (e: React.MouseEvent<HTMLElement>) => void;
    setShowUploadModal?: (show: boolean) => void;
}

const UploadPfpModal: React.FC<UploadPfpModalProps> = ({ toggleModal, setShowUploadModal }) => {

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
    <div className='absolute h-screen w-full top-0 left-0 flex items-center justify-center bg-[#0C0C1D]/50 text-white z-[10]'>
        <div className='absolute h-full w-full top-0 left-0 flex bg-[#0C0C1D]/90 z-6' onClick={loading ? undefined : toggleModal}></div>
        <div className='flex flex-col gap-6 bg-background/50 bg-opacity-50 backdrop-blur-lg rounded-xl items-center justify-center py-10 px-20 border border-primary/50 z-7'>
            <h3 className='uppercase self-start text-primary text-2xl'>Subir imagen</h3>
            <div className='flex flex-col items-center justify-center py-10 px-25 rounded-lg gap-4 bg-[#101026]/50'>
                <img src={preview ? preview : "/user_pfp.svg"} className='h-[190px] w-[190px] rounded-full object-cover'/>
                <p>Vista Previa</p>
                <input type="file" accept="image/*" onChange={handleFileChange} className='bg-primary cursor-pointer text-black hover:bg-primary/70 cursor-pointer text-base py-[6px] px-10 w-50 rounded' />
                <p className='text-sm text-white/50'>PNG, JPG, JPEG, WEBP. MÁX 2MB</p>
            </div>
            <p onClick={loading ? undefined : closeModal} className={`text-primary ${!loading ? "cursor-pointer" : "cursor-default"} self-end text-[20px]`}>{loading ? "Cargando..." : `Listo`}</p>
        </div>
    </div>
  )
}

export default UploadPfpModal