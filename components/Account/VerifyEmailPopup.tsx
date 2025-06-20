"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { sendEmailVerification, reload } from "firebase/auth";
import { useAuth } from "@/context/auth-context";

export default function VerifyEmailPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user && !user.emailVerified) {
      setShowPopup(true);
    } else{
      setShowPopup(false);
    }
  }, [user]);

  const handleSendVerification = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await sendEmailVerification(user);
      setSent(true);
    } catch (err) {
      console.error("Error sending verification email:", err);
    }
  };

  const handleCheckVerification = async () => {
    const user = auth.currentUser;
    if (!user) return;

    setLoading(true);
    await reload(user);
    setLoading(false);

    if (user.emailVerified) {
      setShowPopup(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="bottom-0 z-50 fixed flex flex-col justify-center items-center gap-2 bg-primary bg-opacity-60 px-10 py-6 rounded-t-lg w-full text-base">
        <img onClick={() => setShowPopup(false)} className="top-6 right-10 absolute opacity-85 hover:opacity-100 cursor-pointer" src={"/close_icon.svg"}/>
        <h2 className="self-start font-body-bold text-md">Verifica tu Email</h2>
      <div className="flex justify-between items-center w-full text-center">
        <p className="text-black/80">Verifica tu dirección de correo electrónico para acceder a todas las características.</p>
        {!sent ? (
          <a
            onClick={handleSendVerification}
            className="rounded text-black/80 hover:text-black underline cursor-pointer"
          >
            Enviar correo de verificación
            
          </a>
        ) : (
          <p className="">Correo de verificación enviado! Revisa tu bandeja de entrada.</p>
        )}

        {/* <button
          onClick={handleCheckVerification}
          className="mt-2 text-gray-600 hover:text-gray-800 text-sm underline"
          disabled={loading}
        >
          {loading ? "Checking..." : "I've verified my email"}
        </button> */}
      </div>
    </div>
  );
}
