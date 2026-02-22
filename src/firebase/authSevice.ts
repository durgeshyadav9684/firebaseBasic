
import {auth} from '../firebase/config'
import { AppUser } from '../types/type';

export const signUp = async (email: string, password: string) => {
  const res = await auth().createUserWithEmailAndPassword(email, password);
  return res.user;
};

export const login = async (email: string, password: string) => {
  const res = await auth().signInWithEmailAndPassword(email, password);
  return res.user;
};

export const logout = async () => {
  await auth().signOut();
};

export const getCurrentUser = (): AppUser| null => {
  const user = auth().currentUser;
  if (!user) return null;
  return { uid: user.uid, email: user.email };
};