import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from 'src/firebase';

export const getProperties = async (service) => {
  const docSnap = await getDoc(doc(db, 'Properties', service));
  return docSnap.data();
};

export const setProperties = async (service, data) => {
  await setDoc(doc(db, 'Properties', service), data);
};
export const updateProperties = async (service, data) => {
  await updateDoc(doc(db, 'Properties', service), data);
};
