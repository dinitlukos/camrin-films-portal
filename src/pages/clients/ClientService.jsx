import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const getProperties = async (service) => {
  const docSnap = await getDoc(doc(db, "Properties", service));
  return docSnap.data();
};
