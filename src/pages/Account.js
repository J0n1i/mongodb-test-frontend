import React from 'react'

function Account() {

    function logout() {
        fetch("http://localhost:3000/users/logout", {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: localStorage.getItem("refreshToken") })
        }).then(data => {
            console.log(data)
            window.location.href = "/login"
        }).catch(err => {
            console.log(err)
        })


    }




    return (
        <div>
            <h1>Account</h1>
            <button onClick={logout}
            >Logout</button>
        </div>
    )
}

export default Account