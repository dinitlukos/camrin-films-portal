import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase";

export const getProperties = async (service) => {
  const docSnap = await getDoc(doc(db, "Properties", service));
  return docSnap.data();
};

export const setProperties = async (service, data) => {
  await setDoc(doc(db, "Properties", service), data);
};
export const updateProperties = async (service, data) => {
  await updateDoc(doc(db, "Properties", service), data);
};

export const createStorage = async (uId, ev) => {
  const storage = getStorage();
  for (let i = 0; i < ev?.length; i++) {
    const el = ev[i]?.name;
    const storageRef = ref(
      storage,
      uId + "/" + el?.replace(/ +/g, "_").toLowerCase() + "/" + "readme.txt"
    );
    await uploadBytes(storageRef, ReadMeFie);
  }
};

export const uploadFile = async (uId, f, path) => {
    const fileExtension = f?.name?.split(".")[1];
    const storage = getStorage();
    const storageRef = ref(storage, uId + "/" + path + "." + fileExtension);
    await uploadBytes(storageRef, f);
    const donwloadUrl = await getDownloadURL(storageRef);
    return donwloadUrl;
  };
