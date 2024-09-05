import React, { useState } from 'react'
import HomeContext from './HomeContext';

export default function HomeState(props) {
    // const Initialuser = []
    
    const initialuser = {id:"",ename: "",egmail: ""};
    const [user,newUser] = useState(initialuser);

    const getUsers = async() => {
        // e.preventDefault();
        //TODO: API Call
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
                
            }
        });
        const json = await response.json()
        console.log(json)
        newUser({
          ename: json.name,
          egmail: json.email
        });


        // console.log(json);
    }

  return (
    <HomeContext.Provider value = {{user,getUsers}}>{props.children}</HomeContext.Provider>
  )
}
