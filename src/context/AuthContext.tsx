import {createContext, ReactNode, useEffect, useState} from "react";
import {auth, db} from "../firebase";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore"


interface IProps {
    children: ReactNode
}

export interface AuthContextInterface {
    singUp: (email: string, password: string) => void;
    logIn: (email: string, password: string) => void;
    logOut: () => void;
    user: {
        email?: any;
    }
}

export const authContextDefaults: AuthContextInterface = {
    singUp: () => null,
    logIn: () => null,
    logOut: () => null,
    user: {email: ""}
};


export const AuthContext = createContext<AuthContextInterface>(authContextDefaults);

export function AuthContextProvider({children}: IProps) {
    const [user, setUser] = useState({})

    function singUp(email: string, password: string) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    function logIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password)
    }


    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser!)
        })
        return () => {
            unsubscribe()
        }
    })

    return (
        <AuthContext.Provider value={{singUp, user, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}