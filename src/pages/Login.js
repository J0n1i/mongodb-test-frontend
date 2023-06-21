import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



function Login({ setAuthenticated }) {
    const [username, setUsername] = useState("123")
    const [password, setPassword] = useState("123")

    const navigate = useNavigate();

    useEffect(() => {
      setAuthenticated(false)
    }, [])
    

    function login(e) {
        e.preventDefault();

        fetch("http://localhost:3000/users/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, password: password })
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        }).then(data => {
            console.log(data)
            setAuthenticated(true)
            navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }






    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => login(e)}>
                <input type="text" placeholder="username"
                    onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>'
            </form>
        </div>
    )
}



export default Login