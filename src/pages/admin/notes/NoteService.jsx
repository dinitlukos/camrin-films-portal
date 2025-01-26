import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore';
import _ from 'lodash';
import { db } from 'src/firebase';

export const getNotes = async (uId) => {
  const docSnap = await getDocs(collection(db, 'notes', uId + '/messages'));
  return _.orderBy(
    _.map(docSnap.docs, (d) => d.data()),
    [(i) => i.date]
  );
};

export const setNote = async (uId, data) => {
  await addDoc(collection(db, 'notes', uId + '/messages'), data);
};

export const updateNote = async (uId, data) => {
  await updateDoc(doc(db, 'notes', uId + '/messages'), data);
};
