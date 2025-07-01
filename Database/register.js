import {db} from './db_config.js';
import { collection, getDocs, doc, setDoc }from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";


document.getElementById("SignUpBtn").addEventListener("click", async (e) => {
  e.preventDefault(); 

  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-pass").value.trim();

  if (!name || !email || !password) {
    alert("Invalid Input");
    return;
  }

  try {
    const userCollection = collection(db, "users"); 
    const querySnapshot = await getDocs(userCollection);
    const ownerCount = querySnapshot.size;
    const newOwnerId = `owner${ownerCount + 1}`; 
    const docRef = doc(db, "users", newOwnerId); 

    await setDoc(docRef, {
      name,
      email,
      password,
      createdAt: new Date()
    });

    alert(`User saved as "${newOwnerId}"`);

  } catch (err) {
    console.error("Error writing document:", err);
    alert("Failed to register user.");
  }
});