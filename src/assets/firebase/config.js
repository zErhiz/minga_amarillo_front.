
import { initializeApp } from "firebase/app";
import {getStorage } from 'firebase/storage'
import {v4} from 'uuid'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQMV46Kj03BBCIgKY5LTD3E_dZzcRG9Bo",
  authDomain: "mindhub-46.firebaseapp.com",
  projectId: "mindhub-46",
  storageBucket: "mindhub-46.appspot.com",
  messagingSenderId: "1069066093083",
  appId: "1:1069066093083:web:70517b5060f0d20ef12ebe"
};

const app = initializeApp(firebaseConfig);

export const storage =getStorage(app)

export async function uploadFile(file){
    const storageRef=ref(storage,v4())
     return await uploadBytes(storage,file)
}

