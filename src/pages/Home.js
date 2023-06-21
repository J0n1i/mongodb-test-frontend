import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();




    function fetchPosts() {
        fetch("http://localhost:3000/posts", {
            method: "GET",
            credentials: "include",
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        }).then(data => {
            console.log(data)
            setPosts(data)
        }).catch(err => {
            if (err.status === 403) {
                refreshToken()
            } else {
                navigate("/login")
            }

        })


    }
    useEffect(() => {
        fetchPosts()

    }, [])



    function refreshToken() {
        fetch("http://localhost:3000/users/refresh", {
            method: "POST",
            credentials: "include",
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        }).then(data => {
            console.log(data)
            fetchPosts()
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>Home</h1>
            <div>
                {posts.length > 0 ?
                    posts.map((post, index) => {
                        return (
                            <div key={index}>
                                <h1>{post.title}</h1>
                                <p>{post.userId}</p>
                            </div>
                        )
                    }
                    ) : <div>loading...</div>
                }


            </div>
        </>
    )
}

export default Home