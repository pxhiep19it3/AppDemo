import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({child}) => {

    const [user, setUser] = useState(null)
    

    return (
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                login: async (email, password) => {
                },
                register: async (email, password) => {
                    try{
                        register(email,password)
                    }catch(e) {
                        console.log(e);
                    }
                }
            }}
        >
            {child}
        </AuthContext.Provider>
    )
}
