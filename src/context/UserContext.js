import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [showSidebar, setShowSidebar] = useState(true)

    const getUser = async (id) => {
       let users = JSON.parse(localStorage.getItem('users'))
       const user = users.find((user) => user.id === id);
       return user
    };

    useEffect(()=>{
        const getUsers = async () => {
            const response = await api.get("/");
            const responseArr = Object.values(response.data);
            localStorage.setItem('users', JSON.stringify(responseArr))
            setUsers(responseArr);
        };
        return getUsers;
    }, []);

    const value = {
        users,
        getUser,
        showSidebar,
        setShowSidebar
    };

    // context
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};