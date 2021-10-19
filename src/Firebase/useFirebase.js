import {
    getAuth, createUserWithEmailAndPassword, signInWithPopup,
    GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializefirebaseapp from "./initialize";
initializefirebaseapp();




const useFirebase = () => {
    const [user, setUser] = useState({});

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false);


    const googlesighninprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const googoleSighnin = () => {

        signInWithPopup(auth, googlesighninprovider)
            .then((result) => {

                setUser(result.user);
            })
    }

    //handle registration






    const handleNamechange = e => {
        setName(e.target.value);
    }
    const handleEmailchange = e => {
        setEmail(e.target.value);
    }
    const handlePasschange = e => {
        setPassword(e.target.value);
    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            })
    }


    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must contain6 charechter');
        }


        isLogin ? proccessLogin(email, password) : createNewuser(email, password);

    }

    const proccessLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
                // ...
            })
            .catch(error => {
                setError(error.message);
            })

    }

    //
    const setUsername = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(res => {
                console.log(res);
            })

    }


    const createNewuser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUsername();
            })
            .catch(error => {
                setError(error.message)

            });

    }

    const toggle = e => {
        setIsLogin(e.target.checked);
    }






    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, [])

    const sighnOut = () => {
        signOut(auth).then(() => {

        })
    }
    return {
        user,
        googoleSighnin,
        sighnOut,
        handleRegistration,
        handleEmailchange,
        handlePasschange,
        error,
        toggle,
        isLogin,
        handleNamechange

    }
}

export default useFirebase;


