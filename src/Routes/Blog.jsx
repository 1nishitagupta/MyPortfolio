import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Blog() {

  const [posts, setPosts] = useState([])
    useEffect(() => {

      async function fetchData(){
        const request = await axios.get("https://dummyjson.com/posts")
        console.log(request.data.posts)
        setPosts(request.data.posts)
    }

        fetchData();
    }, []);


    function HomeButton() {
      const navigate = useNavigate()
    
      function handleClick() {
        
        navigate('/')
      }
    
      return (
        <button className='home-button' type="button" onClick={handleClick}>
          Go home
        </button>
      );
    }


  return (
    <>
    <section className='blog-section'>
      <div className="container">
        <HomeButton/>
        <div className="blog">
          <div className="heading">
            <p>My Blog</p>
            <span>Blogs</span>
          </div>
          <div className="row">
            
            {
                posts.slice(0,5).map((post) => {
                    return <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </article>
                })
            }
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Blog