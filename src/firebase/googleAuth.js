import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const loginWithGoogle = (onSuccess, onFailed) => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
        prompt: 'select_account',
        'login_hint': 'user@example.com'
    });
    const auth = getAuth();
    auth.languageCode = 'it';

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - 7);
    const expirationDateString = expirationDate.toUTCString();

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const photoUrl = result.user.photoURL;
            const displayName = result.user.displayName;
            const email = result.user.email;
            const user = result.user;
            localStorage.setItem('token', token);
            localStorage.setItem('photoUrl', photoUrl);
            localStorage.setItem('displayName', displayName);
            localStorage.setItem('email', email)
            document.cookie = `login=true; expires=${expirationDateString}; path=/`;
            onSuccess()
        }).catch((error) => {
            onFailed
        });
}

export default loginWithGoogle