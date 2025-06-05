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
    <div className="fixed bottom-0 w-full bg-primary bg-opacity-60 py-6 px-10 gap-2 rounded-t-lg text-base flex flex-col items-center justify-center z-50">
        <img onClick={() => setShowPopup(false)} className="absolute opacity-85 hover:opacity-100 right-10 top-6 cursor-pointer" src={"/close_icon.svg"}/>
        <h2 className="font-body-bold text-md self-start">Verifica tu Email</h2>
      <div className="flex justify-between items-center w-full text-center">
        <p className="text-black/80">Verifica tu dirección de correo electrónico para acceder a todas las características.</p>
        {!sent ? (
          <a
            onClick={handleSendVerification}
            className="text-black/80 rounded underline cursor-pointer hover:text-black"
          >
            Enviar correo de verificación
            
          </a>
        ) : (
          <p className="">Correo de verificación enviado! Revisa tu bandeja de entrada.</p>
        )}

        {/* <button
          onClick={handleCheckVerification}
          className="mt-2 underline text-sm text-gray-600 hover:text-gray-800"
          disabled={loading}
        >
          {loading ? "Checking..." : "I've verified my email"}
        </button> */}
      </div>
    </div>
  );
}
