import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "../Components/Toast/Toast";
import { sortedObj } from "./utils";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

const colRef = collection(db, "legs");

const queryRef = query(colRef, orderBy("createdAt"));

export const fetchData = async (setLegJson) => {
  try {
    const resp = await getDocs(queryRef);

    resp.docs.forEach((doc) => {
      const data = doc.data();

      delete data.createdAt;

      const sortedData = sortedObj(data);

      setLegJson((prev) => prev + JSON.stringify(sortedData, null, 2) + "\n");
    });
    toast("Data Fetched Successfully", "success");
  } catch (err) {
    console.log(err);
  }
};

export const addData = async (obj) => {
  try {
    const resp = await addDoc(colRef, { ...obj, createdAt: serverTimestamp() });
  } catch (err) {
    console.log(err);
  }
};
