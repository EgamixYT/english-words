import { LoginIcon } from "@heroicons/vue/outline";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
    actions: {
        async login({dispatch, commit}, {email, password}){
            try {
                await signInWithEmailAndPassword(email, password)
            } catch (e) {
                
            }
        }
    }
}