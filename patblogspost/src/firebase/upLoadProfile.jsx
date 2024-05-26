import { ref, uploadBytes } from "firebase/storage";
import { storage, fireDB, auth } from "./firebaseConfig"; // Import Firebase configuration
import { updateDoc, doc } from "firebase/firestore";

export const uploadProfile = async (profileImage, name, email) => {
    try {
       
        const storageRef = ref(storage, `profileImages/${profileImage.name}`);
        await uploadBytes(storageRef, profileImage);

        // Get the download URL of the uploaded image
        const imageURL = await getDownloadURL(storageRef);

        // Update user's profile information in Firestore
        const user = auth.currentUser;
        if (user) {
            const userDocRef = doc(fireDB, "users", user.uid);
            await updateDoc(userDocRef, {
                name: name,
                email: email,
                profileImage: imageURL // Store the image URL instead of the image itself
            });
            return true; // Return true if successful
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error uploading profile image:", error.message);
        return false; // Return false if an error occurred
    }
};