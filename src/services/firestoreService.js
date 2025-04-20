import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'src/firebase/config';

// Generic fetcher
export const getFromCollection = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];

    querySnapshot.forEach((item) => {
      // Add the document ID to each document's data
      documents.push({ id: item.id, ...item.data() });
    });

    return { success: true, data: documents };
  } catch (error) {
    console.error('Error getting documents: ', error);
    return { success: false, error };
  }
};

export const addToCollection = async (collectionName, data) => {
  try {
    const counterRef = doc(db, 'counters', collectionName);
    const counterSnap = await getDoc(counterRef);

    let nextId = 1;
    if (counterSnap.exists()) {
      nextId = counterSnap.data().currentId + 1;
      await updateDoc(counterRef, { currentId: nextId });
    } else {
      await setDoc(counterRef, { currentId: nextId });
    }

    const paddedId = nextId.toString();

    // 👉 Inject the ID into the payload
    const payloadWithId = { id: paddedId, ...data };

    const docRef = doc(db, collectionName, paddedId);
    await setDoc(docRef, payloadWithId);

    return { success: true, id: paddedId };
  } catch (error) {
    console.error('Error adding document: ', error);
    return { success: false, error };
  }
};

export const deleteDocument = async (collectionName, id) => {
  try {
    await deleteDoc(doc(collection(db, collectionName), id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting document:', error);
    return { success: false, error };
  }
};

export const updateDocument = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    return { success: true };
  } catch (error) {
    console.error('Error updating document:', error);
    return { success: false, error };
  }
};

export const deleteItemFromArray = async (
  collectionName,
  docId,
  arrayFieldName,
  itemIdToDelete
) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return { success: false, error: 'Document not found' };
    }

    const data = docSnap.data();
    const currentArray = data[arrayFieldName] || [];

    const updatedArray = currentArray.filter((item) => item.id !== itemIdToDelete);

    await updateDoc(docRef, {
      [arrayFieldName]: updatedArray,
    });

    return { success: true };
  } catch (error) {
    console.error('Error deleting item from array:', error);
    return { success: false, error };
  }
};
