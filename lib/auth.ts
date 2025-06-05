// lib/auth.ts
import { auth } from './firebase';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile, updateEmail, reauthenticateWithCredential, EmailAuthProvider
} from 'firebase/auth';

export const signUp = async (email: string, password: string, displayName: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, {
    displayName,
  });

  return user;
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);


export const changeUsername = (displayName: string) => {
  return updateProfile(auth.currentUser!, {
    displayName,
  })
}

export async function changeUserEmail(newEmail: string, currentPassword: string) {
  const user = auth.currentUser;

  if (!user || !user.email) throw new Error("User not logged in");

  // Re-authenticate
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);

  // Update email
  await updateEmail(user, newEmail);
}
