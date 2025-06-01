import { auth, storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export const uploadPfp = async (file: File) => {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');

  // Reference: profile_images/userId.jpg
  const imageRef = ref(storage, `profile_images/${user.uid}/${file.name}`);

  // Upload file
  await uploadBytes(imageRef, file);

  // Get URL
  const downloadURL = await getDownloadURL(imageRef);

  // Update user profile
  await updateProfile(user, {
    photoURL: downloadURL,
  });

  return downloadURL;
};