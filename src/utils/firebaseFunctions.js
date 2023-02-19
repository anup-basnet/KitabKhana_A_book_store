import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../firebase.config"

// saving new items 
export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'bookItems', `${Date.now()}`), data, { merge: true }
    )
}

// global book items 
export const getAllBookItems = async () => {
    const items = await getDocs(
        query(collection(firestore, "bookItems"), orderBy('id', 'desc'))
    );
    return items.docs.map((doc) => doc.data());
}